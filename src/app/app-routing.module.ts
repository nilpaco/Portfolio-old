import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterComponent } from './master/master.component';
import { ProjectDetailComponent }   from './project-detail/project-detail.component';
import { ProjectsComponent }      from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  component: MasterComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: 'projects',     component: ProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
