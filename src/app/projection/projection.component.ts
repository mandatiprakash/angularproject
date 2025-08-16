import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.css'
})
export class ProjectionComponent implements OnInit, AfterContentInit {

  @ContentChild('h2')
  header: ElementRef | undefined;

  currentDate: Date;

  constructor() {
    this.currentDate = new Date();

  }
  ngOnInit(): void {
    console.log('projection oninit', this.header);
  }

  ngAfterContentInit(): void {
    console.log('proejction oninit', this.header);
    if (this.header != undefined) {
      this.header.nativeElement.innerText = this.header?.nativeElement.innerText + ".Thank you";
    }

  }


}
