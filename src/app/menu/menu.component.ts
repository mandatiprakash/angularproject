import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public authService = inject(AuthService);
  router = inject(Router);

  constructor(){
    this.authService.loadAuthUser();

  }

  logout(){
    this.authService.removeAuthUser();
    this.router.navigate(['/login']);

  }


  
}
