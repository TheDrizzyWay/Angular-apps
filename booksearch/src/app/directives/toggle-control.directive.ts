import { 
  Directive, ElementRef, Renderer2, HostListener
} from '@angular/core';

@Directive({
  selector: '[appToggleControl]'
})
export class ToggleControlDirective {
  closed: boolean = true;
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef) { }

  @HostListener('click')

  toggleClass():void {
    this.closed = !this.closed;
    const currentElement = this.elRef.nativeElement;
    const parentElement = this.renderer.parentNode(currentElement);
    const childElement = this.elRef.nativeElement.children[0];

    if (!this.closed) {
      this.renderer.addClass(parentElement, 'search-open');
      this.renderer.addClass(childElement, 'search-icon-open');
    } else {
      this.renderer.removeClass(parentElement, 'search-open');
      this.renderer.removeClass(childElement, 'search-icon-open');
    }
  }

}
