import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' } },
  { path: 'blog/:slug', component: BlogPostComponent, data: { animation: 'BlogPostPage' } },
  { path: '**', redirectTo: '' },
];
