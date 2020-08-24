import { Product } from './../dto/Product';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private _products: Product[] = [
        {
            id: 1,
            name: 'Ice-Coffee',
            photos: ['../../../assets/resources/images/ice-coffee.jpg'],
            description: 'Cool',
            price: 2000
        },
        {
            id: 2,
            name: 'Orange Juice',
            photos: ['../../../assets/resources/images/orange-juice.jpg'],
            description: 'Cool',
            price: 2500
        },
        {
            id: 3,
            name: 'Ice-cream',
            photos: ['../../../assets/resources/images/ice-cream.jpg'],
            description: 'Cool',
            price: 3000
        },
    ]

    get products(){
        return [...this._products];
    }

    get cartSize(){
        return this.products.length;
    }
}