import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productsComponent } from './pages/home/products.component';
import { ProductWizardComponent } from './pages/product-wizard/product-wizard.component';

const routes: Routes = [
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path:'products',component: productsComponent},
  {path:'product-wizard',component: ProductWizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
