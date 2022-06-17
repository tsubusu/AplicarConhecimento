import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentoriaComponent } from './mentoria.component';
import { MentoriaRoutingModule } from './mentoria-routing.module';
import { InputModule } from '../../shared/component/input/input.module';


@NgModule({
  declarations: [MentoriaComponent],
  imports: [
    CommonModule,
    InputModule,
    MentoriaRoutingModule,
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class MentoriaModule { }
