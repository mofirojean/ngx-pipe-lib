import { Routes } from '@angular/router';
import {CodePreviewComponent} from './components/code-preview/code-preview.component';
import { DocsComponent } from './components/docs/docs.component';
import { sidebarChildrenRoutes } from './utils/sidebar';

export const routes: Routes = [
  {
    path: 'preview',
    component: CodePreviewComponent
  },
  {
    path: 'pipes',
    component: DocsComponent,
    children: sidebarChildrenRoutes
  },
  { path: '', pathMatch: 'full', redirectTo: 'pipes' }
];
