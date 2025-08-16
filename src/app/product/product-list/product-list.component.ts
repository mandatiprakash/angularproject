import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { MessageService } from '../../service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {

  productService = inject(ProductService);
  products: Product[];
  subscriptions: Subscription[] | undefined;
  messageService = inject(MessageService);
  router = inject(Router);

  constructor() {
    this.products = [];
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    console.log('product list destroyed');
    this.subscriptions?.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts() {
    this.subscriptions?.push(this.productService.getProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      },
      error: (err) => {
        console.log(err);
      }
    }));
  }

  deleteProduct(product: Product) {
    let confirmDelete = confirm(`Do you want to delete product ${product.productName}?`);

    if (confirmDelete) {
      this.productService.deleteProduct(product.productId).subscribe({
        next: (resp) => {
          if (resp) {
            this.messageService.notify('Product deleted successfully');
            this.loadProducts();
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  editProduct(product: Product) {
    this.router.navigate(['templatedriven'], {
      queryParams: {
        id: product.productId
      }
    })
  }
}
