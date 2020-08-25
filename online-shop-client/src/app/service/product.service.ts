import { environment } from './../../environments/environment.prod';
import { Product } from './../dto/Product';
import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    constructor(private http: HttpClient){}

    private _products: Product[] = []

    findAll(){
        return this.http.get<Product[]>(`${environment.baseApi}/products`)
    }
}