import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { pageLoadAnimation, routeAnimations } from '../../animation/animations';
import { SafeBlogPost } from '../../models/global-state.model';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  animations: [routeAnimations, pageLoadAnimation]
})
export class BlogPostComponent implements OnInit, OnDestroy {
  
  post: SafeBlogPost | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.globalStateService.getBlogPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(blogPosts => {
        this.post = blogPosts.find(post => post.id === id);
      });
  }

  share(platform: string) {
    const url = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(this.post?.title || '')}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(this.post?.title || '')}`;
        break;
    }

    window.open(shareUrl, '_blank');
  }

  getPreviousPostId(): number | null {
    return this.post && this.post.id > 1 ? this.post.id - 1 : null;
  }

  getNextPostId(): number | null {
    const maxId = 3;
    return this.post && this.post.id < maxId ? this.post.id + 1 : null;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}