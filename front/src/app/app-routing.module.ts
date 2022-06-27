import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const mainRoutes: Routes = [
  { path: 'flex-box', loadChildren: () => import('./css-flex-box/css-flex-box-routing.module').then(m => m.CssFlexBoxRoutingModule)},
  { path: 'sass', loadChildren: () => import('./sass/sass-routing.module').then(m => m.SassRoutingModule)},
  { path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)},
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule)},
  { path: '', component: AppComponent},
  { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { useHash: true, preloadingStrategy: PreloadAllModules})], // carregar as demais paginas em segundo plano
  exports: [RouterModule]
})
export class AppRoutingModule { }
