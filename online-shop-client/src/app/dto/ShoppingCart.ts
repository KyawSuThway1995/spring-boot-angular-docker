import { Injectable } from '@angular/core'
import { Product } from './Product';
import { Order } from './Order';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCart{
    
    private _orders: Order[] = [];

    get orders(){
        return this._orders;
    }

    addToCart(product: Product){
        let order = this._orders.find(order => order.product.id == product.id);
        if(order)
            order.quantity += 1;
        else{
            let od = new Order();
            od.product = product;
            this._orders.push(od)
        }
           
    }

    subFromCart(product: Product){
       let order = this._orders.find(od => od.product.id == product.id);
       if(order){
            order.quantity -= 1;
            
            if(!order.quantity){
                this.removeOrder(order);
            }
                
       }
    }

    removeOrder(order: Order){
        let index = this._orders.findIndex(od => od.id == order.id);
        this._orders.splice(index, 1);
    }


    get subTotal(){
        return this._orders.reduce((acc, od) => acc + (od.quantity * od.product.price), 0)
    }

    get tax(){
        return Math.floor(this.subTotal * 0.05);
    }

    get total(){
        return this.subTotal + this.tax;
    }

    get cartSize(){
        return this._orders.length
    }

    clear() {
        this._orders = []
    }
}