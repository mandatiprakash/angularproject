import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject: ReplaySubject<string>;
  constructor() {
    this.subject = new ReplaySubject<string>(2);
   }

   notify(msg:string)
   {
    this.subject.next(msg);
   }

   getMessage(){
    return this.subject;
   }
}
