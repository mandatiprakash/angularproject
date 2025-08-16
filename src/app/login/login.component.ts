import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  frm: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private fb: FormBuilder){

    this.frm = this.fb.group({
      userName: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }

  login(){
      if(this.frm.valid)
      {
        let loginUser = new Login();
        loginUser.userName = this.frm.get('userName')?.value;
        loginUser.password = this.frm.get('password')?.value;
        this.authService.validateUser(loginUser).subscribe({
          next:(resp) => {
            this.authService.setAuthUser(resp);
            this.router.navigate(['databinding']);
          },
          error: (err) => {
        // Show error message on failed login
        alert('Please enter correct username and password');
        
        // Optional: You can log or inspect the error
        console.error(err);
      }
        })
      }
  }

}
