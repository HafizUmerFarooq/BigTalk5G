import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productsComponent } from './pages/home/products.component';

const routes: Routes = [
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path:'products',component: productsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
