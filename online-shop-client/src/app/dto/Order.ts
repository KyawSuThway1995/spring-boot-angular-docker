import { Product } from './Product';
export class Order{
    id: number;
    product: Product;
    quantity: number = 1;
}