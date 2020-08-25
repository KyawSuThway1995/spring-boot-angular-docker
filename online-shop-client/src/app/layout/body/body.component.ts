import { ShoppingCart } from './../../dto/ShoppingCart';
import { Product } from './../../dto/Product';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private shoppingCart: ShoppingCart) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(
      products => this.products = products
    )
  }

  addToCard(product: Product){
    this.shoppingCart.addToCart(product)
  }
}
