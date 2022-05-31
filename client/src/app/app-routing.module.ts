import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumbs: 'Home'}},
  {path: 'test-error', component: TestErrorComponent, data: {breadcrumbs: true, text: 'Test Errors'}},
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumbs: true, text: 'Server Error'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumbs: true, text: 'Not Found'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule), data: {breadcrumbs: true, text: 'Shop'}},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
