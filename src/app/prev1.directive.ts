import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev1]'
})
export class Prev1Directive {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  Prev1Func() {
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var Spaicel_Program_item = elm.getElementsByClassName("Spaicel_Program_item");
    elm.prepend(Spaicel_Program_item[Spaicel_Program_item.length - 1]);
  }

}