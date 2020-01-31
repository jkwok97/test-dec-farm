import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'page-one-list', loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule) }, 
  { path: 'page-Two-list', loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule) }, 
  { path: 'page-three-list', loadChildren: () => import('./page-three/page-three.module').then(m => m.PageThreeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
