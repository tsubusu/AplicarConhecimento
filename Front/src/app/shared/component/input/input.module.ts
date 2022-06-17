import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class InputModule { }
