import { Component, inject } from '@angular/core';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproj';
  message: string = "";


  messageService = inject(MessageService);

  constructor(){
    this.messageService.getMessage().subscribe({
      next: (resp) => {
          this.message = resp;
          setTimeout(() => {
            this.message = "";
          }, 2000);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  callme(){
    this.messageService.getMessage().subscribe({
      next:(resp) => {
        console.log('last message:' + resp);
      }
    })
  }
}
