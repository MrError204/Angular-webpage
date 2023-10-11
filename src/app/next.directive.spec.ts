import {  NextDirective } from './next.directive';
import { ElementRef,} from '@angular/core';

describe('NextDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(null); 
    const directive = new NextDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
