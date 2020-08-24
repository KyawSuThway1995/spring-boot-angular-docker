import { InvoicesComponent } from './layout/body/invoices/invoices.component';
import { InvoiceComponent } from './layout/body/invoices/invoice/invoice.component';
import { CartComponent } from './layout/body/cart/cart.component';
import { BodyComponent } from './layout/body/body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'cart', component: CartComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/:id', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
