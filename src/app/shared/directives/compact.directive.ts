import { Directive, ElementRef, OnInit } from '@angular/core';
import { MatFormField, } from '@angular/material/form-field';

@Directive({
  selector: '[compact]',
})
export class CompactDirective implements OnInit {
  private element!: ElementRef;
  private hint: ElementRef | null = null;
  private error: ElementRef | null = null;
  
  constructor(
    private matformfield: MatFormField,
  ) { }

  ngOnInit(): void {
    this.element = this.matformfield._elementRef;
    this.element.nativeElement.classList.add('compactable');
    this.registerDomChangedEvent(this.element.nativeElement); 
  }

  private registerDomChangedEvent(element: any): void {
    const observer = new MutationObserver(() => {
      this.hint = this.element.nativeElement.querySelector('mat-hint');
      this.error = this.element.nativeElement.querySelector('mat-error');

      this.updateCompact();
    });
    observer.observe(element, { attributes: false, childList: true, subtree: true });
  }
 
  private updateCompact = () => {
    if (this.hint !== null || this.error !== null) {
      this.element.nativeElement.classList.remove('compact');
    } else {
      this.element.nativeElement.classList.add('compact');
    }
  }
}
