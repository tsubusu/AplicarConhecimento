import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentoriaComponent } from './mentoria.component';
import { MentoriaRoutingModule } from './mentoria-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: MentoriaComponent },
];

@NgModule({
  declarations: [MentoriaComponent],
  imports: [
    CommonModule,
    RouterModule,
    //MentoriaRoutingModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MentoriaModule { }
