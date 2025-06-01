import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Blog, BlogPost, GlobalState, Project, SafeBlogPost } from '../models/global-state.model';
import { GLOBAL_STATE, PROJECTS } from '../data/static-data';
import { BLOGS, BLOG_POSTS } from '../data/blog-data';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private stateSubject = new BehaviorSubject<Readonly<GlobalState>>(GLOBAL_STATE);
  private projectsSubject = new BehaviorSubject<ReadonlyArray<Readonly<Project>>>(PROJECTS);
  private blogsSubject = new BehaviorSubject<ReadonlyArray<Readonly<Blog>>>(BLOGS);
  private blogPostsSubject = new BehaviorSubject<ReadonlyArray<Readonly<BlogPost>>>(BLOG_POSTS);

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  getState(): Observable<Readonly<GlobalState>> {
    return this.stateSubject.asObservable();
  }

  getProjects(): Observable<ReadonlyArray<Readonly<Project>>> {
    return this.projectsSubject.asObservable();
  }

  getBlogs(): Observable<ReadonlyArray<Readonly<Blog>>> {
    return this.blogsSubject.asObservable();
  }

  getBlogPosts(): Observable<ReadonlyArray<Readonly<SafeBlogPost>>> {
    return this.blogPostsSubject.asObservable().pipe(
      map(posts => posts.map(post => ({
        ...post,
        content: this.sanitizer.bypassSecurityTrustHtml(post.content)
      })))
    );
  }

  getBlogPostBySlug(slug: string): Observable<SafeBlogPost | undefined> {
    return this.getBlogPosts().pipe(
      map(posts => posts.find(post => post.id === slug))
    );
  }

  getBlogBySlug(slug: string): Observable<Blog | undefined> {
    return this.getBlogs().pipe(
      map(blogs => blogs.find(blog => blog.id === slug))
    );
  }

  // Get navigation for blog posts (previous/next)
  getBlogPostNavigation(currentSlug: string): Observable<{previous: SafeBlogPost | null, next: SafeBlogPost | null}> {
    return this.getBlogPosts().pipe(
      map(posts => {
        const currentIndex = posts.findIndex(post => post.id === currentSlug);
        
        return {
          previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
          next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
        };
      })
    );
  }
}