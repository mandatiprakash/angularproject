import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {

  @Input('customer-list')
  customers: Customer[];

  @Input('cname')
  cname: string|undefined;


  constructor(private cdr: ChangeDetectorRef){
    this.customers = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges tiggered',changes);
  }


  refresh(){
    this.cdr.markForCheck();
  }




}
