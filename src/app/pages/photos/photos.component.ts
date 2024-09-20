import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { listAnimations, photoGalleryAnimations } from '../../animation/animations';
import { GalleryImage } from '../../models/global-state.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
  animations: [photoGalleryAnimations, listAnimations],
})

export class PhotosComponent implements OnInit, OnDestroy {
  filteredImages: GalleryImage[] = [];
  selectedImage: GalleryImage | null = null;
  currentIndex: number = -1;
  categories: string[] = [];
  selectedCategory: string = '';
  loading: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.simulateLoading();

    this.globalStateService.getPhotos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(images => {
        this.filteredImages = [...images];
        this.categories = [...new Set(images.map(img => img.category))];
      });
  }

  simulateLoading(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.loading = true;
    setTimeout(() => {
      this.filteredImages = category 
        ? this.filteredImages.filter(img => img.category === category)
        : this.filteredImages;
      this.loading = false;
    }, 500);
  }

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
    this.currentIndex = this.filteredImages.findIndex(img => img.id === image.id);
  }

  closeImage(): void {
    this.selectedImage = null;
    this.currentIndex = -1;
  }

  navigate(direction: number): void {
    this.currentIndex += direction;
    if (this.currentIndex >= 0 && this.currentIndex < this.filteredImages.length) {
      this.selectedImage = this.filteredImages[this.currentIndex];
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
