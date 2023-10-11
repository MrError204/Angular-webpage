import { PrevDirective } from './prev.directive';
import { ElementRef } from '@angular/core';

describe('PrevDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(null); // You can pass null or a dummy element if needed
    const directive = new PrevDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
