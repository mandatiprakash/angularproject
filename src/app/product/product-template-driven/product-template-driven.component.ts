import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../service/message.service';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-template-driven',
  templateUrl: './product-template-driven.component.html',
  styleUrl: './product-template-driven.component.css'
})
export class ProductTemplateDrivenComponent implements OnInit {

  product: Product;
  messageService = inject(MessageService);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  isEditMode: boolean = false;

  constructor() {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      let pid = data['id'];
      if (pid != undefined) {
        this.isEditMode = true;
        this.productService.getProductById(pid).subscribe({
          next:(resp) => {
            this.product = resp;
          }
        })
      }
    })
  }

  saveProduct(frm: NgForm) {
    if (frm.valid) {

      this.productService.addProduct(this.product).subscribe({
        next: (resp) => {
          if (resp) {
            this.messageService.notify('Product Saved Successfully');
          }
        },
        error: (err) => {
          console.log(err);
        }
      })


    }
  }

  newProduct(){
    this.product = new Product();
    this.isEditMode = false;
  }
}
