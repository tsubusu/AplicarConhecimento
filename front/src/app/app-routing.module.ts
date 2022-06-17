import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const mainRoutes: Routes = [
  { path: 'flex-box', loadChildren: () => import('./css-flex-box/css-flex-box-routing.module').then(m => m.CssFlexBoxRoutingModule)},
  { path: 'sass', loadChildren: () => import('./sass/sass-routing.module').then(m => m.SassRoutingModule)},
  { path: 'angular', loadChildren: () => import('./angular/angular-routing.module').then(m => m.AngularRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { useHash: true, preloadingStrategy: PreloadAllModules})], // carregar as demais paginas em segundo plano
  exports: [RouterModule]
})
export class AppRoutingModule { }
