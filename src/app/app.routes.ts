import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  // { path: 'blog', component: BlogComponent,  data: { animation: 'BlogPage' }},
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' }},
  { path: 'projects/:id', component: ProjectDetailsComponent, data: { animation: 'ProjectDetailsPage' }},
  // { path: 'blog/:id', component: BlogPostComponent, data: { animation: 'BlogPostsPage' } },
  { path: '**', redirectTo: '' },
];
