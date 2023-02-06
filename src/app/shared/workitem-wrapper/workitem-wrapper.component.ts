import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-workitem-wrapper',
  templateUrl: './workitem-wrapper.component.html',
  styleUrls: ['./workitem-wrapper.component.scss']
})
export class WorkitemWrapperComponent implements OnInit, OnChanges {
  @Input() title!: string;
  @Input() opened: boolean = false;
  @Input() width: number = 50;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  left: boolean = true;
  leftWidth: number = 100;
  right: boolean = false;
  rightWidth: number = 0;

  constructor() { }
  
  ngOnInit(): void { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.opened) {
      this.leftWidth = (100 - this.width);
      this.rightWidth = this.width;
      setTimeout(() => {
        this.right = true;
        if (this.width === 100) {
          this.left = false;
        }
      }, 350);
    } else {
      this.leftWidth = 100;
      this.rightWidth = 0;
      setTimeout(() => {
        this.right = false;
        if (this.width === 100) {
          this.left = true;
        }
      }, 350);
    }
  }

  close(): void {
    this.onClose.emit();
  }
}
