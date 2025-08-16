import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrl: './pipe-sample.component.css',
  providers: [LoggerService]
})
export class PipeSampleComponent {

  product: Product;
  DOB: Date;
  router = inject(Router);
  loggerService = inject(LoggerService);

  constructor() {
    this.product = new Product(101, "Laptop", "P001", 45000);
    this.DOB = new Date("1987-10-2");

    this.loggerService.setName('pradeep' + Math.random());
  }

  redirect() {
    //this.router.navigate(['dir', this.product.productId]);

    this.router.navigate(['dir', this.product.productId], {
      queryParams: {
        city: "mumbai", country: 'india'
      }
    });
  }
}
