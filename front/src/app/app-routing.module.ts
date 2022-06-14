import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'flex-box', loadChildren: () => import('./css-flex-box/css-flex-box-routing.module').then(m => m.CssFlexBoxRoutingModule)},
  { path: 'sass', loadChildren: () => import('./sass/sass-routing.module').then(m => m.SassRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], // carregar as demais paginas em segundo plano
  exports: [RouterModule]
})
export class AppRoutingModule { }
