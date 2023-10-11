import { Next1Directive1} from './next1.directive';
import { ElementRef } from '@angular/core';

describe('Next1Directive1', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(null); // You can pass null or a dummy element if needed
    const directive = new Next1Directive1(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

