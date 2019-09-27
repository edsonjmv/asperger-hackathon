import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'sign-up', loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'list', loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
