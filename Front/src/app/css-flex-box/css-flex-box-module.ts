import { NgModule } from '@angular/core';
import { CssFlexBoxComponent } from './css-flex-box.component';
import { CommonModule } from '@angular/common';
import { CssFlexBoxRoutingModule } from './css-flex-box-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Aula1Component } from './aula1/aula1.component';
import { InicioComponent } from './aula1/inicio/inicio.component';
import { PicosComponent } from './aula1/picos/picos.component';
 
const routes: Routes = [
  { path: '', component: CssFlexBoxComponent },
  {path: 'aula1', component: Aula1Component,
      children: [
      { path : 'inicio', component: InicioComponent },
      { path : 'picos', component: PicosComponent }
    ],
  }
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
