import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  productName: string = 'Laptop';
  productCode: string = 'P001';
  authService = inject(AuthService);
  btnText: string = "Login(Toggle)";

  constructor(){
    if (this.authService.authenticate()) {
      this.btnText = "Logged In";
    }
    else {
      this.btnText = "Login(Toggle)"
    }
  }

  showAlert() {
    alert('Prodcut Name =' + this.productName);
  }

  login() {
    this.authService.login();
    console.log('IsLoggedIn=' + this.authService.authenticate());
    if (this.authService.authenticate()) {
      this.btnText = "Logged In";
    }
    else {
      this.btnText = "Login(Toggle)"
    }
  }
}

