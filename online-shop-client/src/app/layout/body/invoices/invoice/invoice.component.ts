import { Invoice } from './../../../../dto/Invoice';
import { InvoiceService } from './../../../../service/invoice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        this.invoice = this.invoiceService.findById(id)
      }
    )
  }

}
