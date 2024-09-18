import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { listAnimations, photoGalleryAnimations } from '../../animation/animations';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
  animations: [photoGalleryAnimations, listAnimations],
})
export class PhotosComponent implements OnInit {
  images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/18684134/pexels-photo-18684134/free-photo-of-birds-flying-over-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Serene Sunset',
      description: 'A beautiful sunset over calm waters.',
      category: 'Nature',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/28374824/pexels-photo-28374824/free-photo-of-ancient-colosseum-architecture-in-rome.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mountain Peak',
      description: 'A majestic mountain peak.',
      category: 'Nature'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/28153548/pexels-photo-28153548/free-photo-of-the-sun-shines-through-the-trees-in-this-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Autumn Fores',
      description: 'A beautiful image of nature.',
      category: 'Nature'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/28319931/pexels-photo-28319931/free-photo-of-a-woman-sitting-on-a-tree-branch-with-a-guitar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Urban Nigh',
      description: 'A beautiful image of nature.',
      category: 'Nature'
    },
  ];

  filteredImages: GalleryImage[] = this.images;
  selectedImage: GalleryImage | null = null;
  currentIndex: number = -1;
  categories: string[] = [];
  selectedCategory: string = '';
  loading: boolean = false;

  ngOnInit(): void {
    this.categories = [...new Set(this.images.map(img => img.category))];
    this.simulateLoading();
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
        ? this.images.filter(img => img.category === category)
        : this.images;
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
}
