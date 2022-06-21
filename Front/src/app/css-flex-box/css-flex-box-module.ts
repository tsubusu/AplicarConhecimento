import { NgModule } from '@angular/core';
import { CssFlexBoxComponent } from './css-flex-box.component';
import { CommonModule } from '@angular/common';
import { CssFlexBoxRoutingModule } from './css-flex-box-routing.module';
 
@NgModule({
    declarations: [CssFlexBoxComponent],
    imports: [
      CommonModule,
      CssFlexBoxRoutingModule,
    ],
    providers: [
    ]
  })

export class CssFlexBoxModule { }
