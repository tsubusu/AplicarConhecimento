import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mentoria', loadChildren: () => import('./mentoria/mentoria.module').then(m => m.MentoriaModule)},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //AngularRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AngularModule { }
