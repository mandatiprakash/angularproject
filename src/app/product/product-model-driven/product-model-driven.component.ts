import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICanDeActivateClass } from '../../guards/check.guard';

@Component({
  selector: 'app-product-model-driven',
  templateUrl: './product-model-driven.component.html',
  styleUrl: './product-model-driven.component.css'
})
export class ProductModelDrivenComponent implements ICanDeActivateClass{

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.frm = new FormGroup({
    //   productId: new FormControl()
    // });

    this.frm = this.fb.group({
      productId: this.fb.control(''),
      productCode: this.fb.control('',{updateOn:'blur', validators: [Validators.required]}),
      productName: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      price: this.fb.control(''),
      description: this.fb.group({
        shortDesc: this.fb.control(''),
        fullDesc: this.fb.control('')
      }),
      codes: this.fb.array(
        [this.fb.control(''), this.fb.control('')]
      )
    });

    this.frm.get('productCode')?.valueChanges.subscribe(data => {
      let priceCtrl = this.frm.get('price');

      priceCtrl?.clearValidators();

      if (data != null && data.indexOf('P') != -1) {
        priceCtrl?.addValidators([Validators.required]);
      }

      priceCtrl?.updateValueAndValidity();
    })
  }

  checkCanDeActivate(): boolean {
    if (this.frm.valid) {

      let confirmLeave = confirm('Do you want to leave the page by saving?');
      if(confirmLeave == true)
      {
         this.saveProduct();
      }
    }
    return true;
  }

  saveProduct() {
    if (this.frm.valid) {
      let data = JSON.stringify(this.frm.value);
      alert('Product saved successfully.' + data);
    }
  }

  get codes(){
    return this.frm.controls["codes"] as FormArray;
  }

  disableValidation() {
    //find the element
    let productNameCtrl = this.frm.get('productName');

    //clear the validation
    productNameCtrl?.clearValidators();

    //update the UI
    productNameCtrl?.updateValueAndValidity();
  }

  resetForm(){
    this.frm.reset();
  }

  update(){
    //this.frm.get("productId")?.setValue(1000);
    this.frm.patchValue({
      productId: 345,
      productName: 'test',
      description: {
        shortDesc: 'test',
        fullDesc: 'full test'
      }
    });
  }


 

}
