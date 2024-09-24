import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Blog, BlogPost, GalleryImage, GitHubRepo, GlobalState, Project, SafeBlogPost } from '../models/global-state.model';
import { GLOBAL_STATE, PROJECTS, IMAGES } from '../data/static-data';
import { BLOGS, BLOG_POSTS } from '../data/blog-data';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private stateSubject = new BehaviorSubject<Readonly<GlobalState>>(GLOBAL_STATE);
  private projectsSubject = new BehaviorSubject<ReadonlyArray<Readonly<Project>>>(PROJECTS);
  private photosSubject = new BehaviorSubject<ReadonlyArray<Readonly<GalleryImage>>>(IMAGES);
  private blogsSubject = new BehaviorSubject<ReadonlyArray<Readonly<Blog>>>(BLOGS);
  private blogPostsSubject = new BehaviorSubject<ReadonlyArray<Readonly<BlogPost>>>(BLOG_POSTS);

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  getState(): Observable<Readonly<GlobalState>> {
    return this.stateSubject.asObservable();
  }

  getProjects(): Observable<ReadonlyArray<Readonly<Project>>> {
    return this.projectsSubject.asObservable();
  }

  getPhotos(): Observable<ReadonlyArray<Readonly<GalleryImage>>> {
    return this.photosSubject.asObservable();
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

  // If you need to update data (e.g., for demo purposes or local storage), you can add methods like this:
  updateProject(updatedProject: Readonly<Project>): void {
    const currentProjects = this.projectsSubject.getValue();
    const updatedProjects = currentProjects.map(project => 
      project.id === updatedProject.id ? { ...updatedProject } : project
    );
    this.projectsSubject.next(updatedProjects);
  }

  // Implement a method to safely get a project by ID
  getProjectById(id: number): Observable<Readonly<Project> | undefined> {
    return this.projectsSubject.pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }

  getGitHubRepos(): Observable<ReadonlyArray<GitHubRepo>> {
    return this.http.get<any[]>(environment.githubApiUrl).pipe(
      map(repos => repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
      })))
    );
  }
}