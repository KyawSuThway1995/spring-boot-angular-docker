import { Order } from './Order';
export class Invoice{
    id: number;
    orders: Order[];
    invoiceDate: Date;
    subTotal: number;
    tax: number;
    total: number;
}