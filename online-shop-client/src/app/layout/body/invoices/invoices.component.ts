import { Invoice } from './../../../dto/Invoice';
import { InvoiceService } from './../../../service/invoice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[]

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoices = this.invoiceService.invoices
  }

}
