import { Prev1Directive } from './prev1.directive';
import { ElementRef } from '@angular/core';

describe('Prev1Directive', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(null); // You can pass null or a dummy element if needed
    const directive = new Prev1Directive(mockElementRef);
    expect(directive).toBeTruthy();
  });
});