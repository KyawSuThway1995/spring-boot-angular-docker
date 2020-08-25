import { Order } from './Order';
export class Invoice{
    id: number;
    orders: Order[];
    invoiceDate: string;
    subTotal: number;
    tax: number;
    total: number;
}