import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, filter, map, retry, take} from 'rxjs';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-observable-sample',
  templateUrl: './observable-sample.component.html',
  styleUrl: './observable-sample.component.css'
})
export class ObservableSampleComponent {

  observableData: Observable<string> | undefined;
  subjectData: Subject<string> | undefined;
  bsubjectData: BehaviorSubject<string> | undefined;
  rsubjectData: ReplaySubject<string> | undefined;
  loggerService = inject(LoggerService);

  constructor(){
    this.subjectData = new Subject<string>();
    this.bsubjectData  = new BehaviorSubject<string>('0');
    this.rsubjectData = new ReplaySubject<string>(3);

    this.loggerService.getName();
  }

  create() {
    this.observableData = new Observable<string>(ob => {
      ob.next('pest1');
      ob.next('pest2');
      setInterval(() => {
        ob.next('test' + Math.random());
      }, 1000);
      setTimeout(() => {
        ob.error('oops error');
      }, 5000)
    });

    // this.subjectData?.next('1');
    // this.subjectData?.next('2');
    // this.subjectData?.next('3');

    // this.bsubjectData?.next('1');
    // this.bsubjectData?.next('2');
    // this.bsubjectData?.next('3');

    // this.rsubjectData?.next('1');
    // this.rsubjectData?.next('2');
    // this.rsubjectData?.next('3');
    // this.rsubjectData?.next('4');
    // this.rsubjectData?.error('my error');

    
  }

  fetch() {
    let ob = {
      next: (response: any) => {
        console.log('Subscriber1 item=' + response);
      },
      error: (err: any) => {
        console.log('Subscriber1 Error occured=' + err);
      },
      complete: () => {
        console.log('Subscriber1 End of stream');
      }
    }
    this.observableData?.subscribe(ob);

    //this.bsubjectData?.subscribe(ob);
  }

  fetch2() {
    this.observableData?.subscribe({
      next: (response: any) => {
        console.log('Subscriber2 item=' + response);
      },
      error: (err: any) => {
        console.log('Subscriber2 Error occured=' + err);
      },
      complete: () => {
        console.log('Subscriber2 End of stream');
      }
    });
  }

  operate(){
    this.observableData = this.observableData?.pipe(
      map(d=>d.toUpperCase()),
      filter(d=>d.indexOf('P') != -1),
      retry(2)
    )
  }

}
