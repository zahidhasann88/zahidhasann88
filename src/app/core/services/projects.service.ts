import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map, catchError, of, combineLatest } from 'rxjs';
import { Project } from '../models/blog.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly githubUsername = 'zahidhasann88';
  private readonly githubApiUrl = 'https://api.github.com';
  
  private contributedReposSubject = new BehaviorSubject<Project[]>([]);
  private starredOwnReposSubject = new BehaviorSubject<Project[]>([]);
  private allRepositoriesSubject = new BehaviorSubject<(Project & { repoType: 'starred' | 'contributed' })[]>([]);
  
  constructor() {
    this.loadRepositories();
    this.combineRepositories();
  }

  private combineRepositories(): void {
    combineLatest([
      this.starredOwnReposSubject.asObservable(),
      this.contributedReposSubject.asObservable()
    ]).pipe(
      map(([starred, contributed]) => [
        ...starred.map(repo => ({ ...repo, repoType: 'starred' as const })),
        ...contributed.map(repo => ({ ...repo, repoType: 'contributed' as const }))
      ])
    ).subscribe(allRepos => {
      this.allRepositoriesSubject.next(allRepos);
    });
  }

  private loadRepositories(): void {
    // Load own repositories with stars
    this.loadStarredOwnRepositories();
    
    // Load contributed repositories (simplified approach)
    this.loadContributedRepositories();
  }

  private loadStarredOwnRepositories(): void {
    this.http.get<Project[]>(`${this.githubApiUrl}/users/${this.githubUsername}/repos?sort=stars&direction=desc&per_page=100`)
      .pipe(
        map(repos => repos.filter(repo => 
          !repo.fork && 
          !repo.private && 
          !repo.archived &&
          repo.stargazers_count > 1 // Only repositories with more than 1 star
        )),
        catchError(error => {
          console.error('Error fetching starred own repositories:', error);
          return of([]);
        })
      )
      .subscribe(repos => {
        this.starredOwnReposSubject.next(repos);
      });
  }

  private loadContributedRepositories(): void {
    // For now, we'll use a simplified approach
    // In production, you'd want to use GitHub's GraphQL API with authentication
    // to get actual contribution data
    
    // Get recent events and filter for contributions to other repositories
    this.http.get<any[]>(`${this.githubApiUrl}/users/${this.githubUsername}/events?per_page=100`)
      .pipe(
        map(events => {
          const contributionEvents = events.filter(event => 
            (event.type === 'PullRequestEvent' || event.type === 'IssuesEvent') &&
            event.repo.name.split('/')[0] !== this.githubUsername // Not own repositories
          );

          const uniqueRepos = new Map();
          
          contributionEvents.forEach(event => {
            const repoFullName = event.repo.name;
            if (!uniqueRepos.has(repoFullName)) {
              uniqueRepos.set(repoFullName, {
                id: parseInt(event.repo.id),
                name: repoFullName.split('/')[1],
                full_name: repoFullName,
                description: `Contributed through ${event.type === 'PullRequestEvent' ? 'Pull Request' : 'Issue'}`,
                html_url: `https://github.com/${repoFullName}`,
                homepage: null,
                stargazers_count: 0,
                forks_count: 0,
                language: null,
                topics: [],
                created_at: event.created_at,
                updated_at: event.created_at,
                pushed_at: event.created_at,
                size: 0,
                open_issues_count: 0,
                license: null,
                private: false,
                fork: false,
                archived: false,
                disabled: false,
                visibility: 'public'
              } as Project);
            }
          });

          return Array.from(uniqueRepos.values()).slice(0, 10);
        }),
        catchError(error => {
          console.error('Error fetching contributed repositories:', error);
          return of([]);
        })
      )
      .subscribe(repos => {
        this.contributedReposSubject.next(repos);
      });
  }

  // Public methods
  getAllRepositories(): Observable<(Project & { repoType: 'starred' | 'contributed' })[]> {
    return this.allRepositoriesSubject.asObservable();
  }

  getContributedRepositories(): Observable<Project[]> {
    return this.contributedReposSubject.asObservable();
  }

  getStarredOwnRepositories(): Observable<Project[]> {
    return this.starredOwnReposSubject.asObservable();
  }

  // Refresh data from GitHub
  refreshData(): void {
    this.loadRepositories();
  }
}