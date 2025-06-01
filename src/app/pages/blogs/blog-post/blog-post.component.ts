import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { pageLoadAnimation, routeAnimations } from '../../../utils/animation/animations';
import { SafeBlogPost } from '../../../utils/models/global-state.model';
import { GlobalStateService } from '../../../utils/services/global-state.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class BlogPostComponent implements OnInit, OnDestroy {
  post: SafeBlogPost | undefined;
  previousPost: SafeBlogPost | null = null;
  nextPost: SafeBlogPost | null = null;
  loading: boolean = true;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap((params) => {
          const slug = params.get('id');

          if (!slug) {
            this.router.navigate(['/blog']);
            return [];
          }

          this.loading = true;
          this.post = undefined;
          this.previousPost = null;
          this.nextPost = null;

          this.globalStateService
            .getBlogPostBySlug(slug)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((post) => {
              this.post = post;
              this.loading = false;

              if (!post) {
                console.error(`Blog post with slug "${slug}" not found`);
                this.router.navigate(['/blog']);
              }
            });

          this.globalStateService
            .getBlogPostNavigation(slug)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((navigation) => {
              this.previousPost = navigation.previous;
              this.nextPost = navigation.next;
            });

          return [];
        })
      )
      .subscribe();
  }

  share(platform: string) {
    const url = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(this.post?.title || '')}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(this.post?.title || '')}`;
        break;
    }

    window.open(shareUrl, '_blank');
  }

  getPreviousPost(): SafeBlogPost | null {
    return this.previousPost;
  }

  getNextPost(): SafeBlogPost | null {
    return this.nextPost;
  }

  navigateToPrevious() {
    if (this.previousPost) {
      this.router.navigate(['/blog', this.previousPost.id]);
    }
  }

  navigateToNext() {
    if (this.nextPost) {
      this.router.navigate(['/blog', this.nextPost.id]);
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
