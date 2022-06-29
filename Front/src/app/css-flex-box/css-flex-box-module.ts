import { NgModule } from '@angular/core';
import { CssFlexBoxComponent } from './css-flex-box.component';
import { CommonModule } from '@angular/common';
import { CssFlexBoxRoutingModule } from './css-flex-box-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Aula1Component } from './aula1/aula1.component';
 
const routes: Routes = [
  { path: '', component: CssFlexBoxComponent,
    // children:[
    //   { path : 'aula1', component: Aula1Component }
    // ],
  },
  {path: 'aula1', component: Aula1Component,}
];


@NgModule({
    declarations: [CssFlexBoxComponent, Aula1Component],
    imports: [
      CommonModule,
      //CssFlexBoxRoutingModule,
      RouterModule.forChild(routes)
    ],
    providers: [
    ]
  })

export class CssFlexBoxModule { }
