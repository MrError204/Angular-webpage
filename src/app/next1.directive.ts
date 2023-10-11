import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext1]'
})
export class Next1Directive1 {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc() {
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var Spaicel_Program_item = elm.getElementsByClassName("Spaicel_Program_item");
    elm.append(Spaicel_Program_item[0]);
  }

}