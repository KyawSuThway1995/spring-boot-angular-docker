import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './../dto/Invoice';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService{
    constructor(private http: HttpClient){}

    private _invoices: Invoice[] = []



    save(invoice: Invoice){
        return this.http.post<Invoice>(`${environment.baseApi}/invoices`, invoice)
    }

    findAll(){
        return this.http.get<Invoice[]>(`${environment.baseApi}/invoices`)
    }

    findById(id: number){
        return this.http.get<Invoice>(`${environment.baseApi}/invoices/${id}`)
    }
}