import { InvoiceService } from './../../../service/invoice.service';
import { Invoice } from './../../../dto/Invoice';
import { Order } from './../../../dto/Order';
import { ShoppingCart } from './../../../dto/ShoppingCart';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/dto/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[];

  constructor(public shoppingCart: ShoppingCart, private invoiceService: InvoiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.orders = this.shoppingCart.orders
  }

  checkOut(){
    let invoice = new Invoice();
    invoice.id = ++ InvoiceService.id;
    invoice.invoiceDate = new Date();
    invoice.orders = this.shoppingCart.orders
    invoice.subTotal = this.shoppingCart.subTotal;
    invoice.tax  =this.shoppingCart.tax;
    invoice.total = this.shoppingCart.total;

    this.invoiceService.save(invoice);
    this.shoppingCart.clear();
    this.router.navigate(['/invoices', invoice.id])
  }
}
