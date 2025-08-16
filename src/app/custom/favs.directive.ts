import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFavs]'
})
export class FavsDirective {
  private isLiked: boolean = true;

  @Input('appFavs')
  color: string|undefined;


  constructor(private ele: ElementRef, private rend: Renderer2) {
    console.log(this.ele.nativeElement);
    this.update();
    //this.ele.nativeElement.style.color = "red";
  }

  @HostListener('click')
  myclick() {
    this.update();
  }

  // @HostListener('mouseover')
  // onMouseOverEvent() {
  //   this.ele.nativeElement.style.color = "yellow";
  // }

  // @HostListener('mouseout')
  // onMouseOutEvent() {
  //   this.ele.nativeElement.style.color = "black";
  // }

  update() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.ele.nativeElement.style.color = this.color;
      this.ele.nativeElement.value = 'UnLike';
    }
    else {
      this.ele.nativeElement.style.color = 'black';
      this.ele.nativeElement.value = 'Like';
    }
  }

}
