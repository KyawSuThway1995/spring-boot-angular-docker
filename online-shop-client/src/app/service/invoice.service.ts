import { Invoice } from './../dto/Invoice';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService{
    static id: number = 0;

    private _invoices: Invoice[] = []

    save(invoice: Invoice){
        this._invoices.push(invoice)
    }

    get invoices(){
        return [...this._invoices];
    }

    findById(id: number){
        return this._invoices.find(inv => inv.id == id)
    }
}