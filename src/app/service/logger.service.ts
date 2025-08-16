import { Injectable } from '@angular/core';

//Treeshaking - Its a comipler option to check if the service is not referenced anywhere then remove the code from bundle
//Size of bundle is reduces & inital load performance is improved
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private name: string= "";

  constructor() {
    console.log('Object created');
   }

  setName(nm: string)
  {
    this.name = nm;
    console.log('Name is set');
  }

  getName()
  {
    console.log(`Name=${this.name}`);
  }
}
