import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' } },
  { path: 'blog/:slug', component: BlogPostComponent, data: { animation: 'BlogPostPage' } },
  { path: '**', redirectTo: '' },
];
