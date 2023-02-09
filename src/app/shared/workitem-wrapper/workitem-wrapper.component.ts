import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { WorkItemMode } from 'src/app/models/work-item-mode.enum';

@Component({
  selector: 'app-workitem-wrapper',
  templateUrl: './workitem-wrapper.component.html',
  styleUrls: ['./workitem-wrapper.component.scss']
})
export class WorkitemWrapperComponent implements OnInit, OnChanges {
  @Input() headerTitle: string = 'Work Item';
  @Input() width: number = 50;
  @Input() isNested: boolean = false;
  @Input() isOpen: boolean = false;
  @Input() isClosable: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  left: boolean = true;
  leftWidth: number = 100;
  right: boolean = false;
  rightWidth: number = 0;
  transitionTime = 700;

  constructor() { }
  
  ngOnInit(): void { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isOpen) {
      this.leftWidth = (100 - this.width);
      this.rightWidth = this.width;
      setTimeout(() => {
        this.right = true;
        if (this.width === 100) {
          this.left = false;
        }
      }, this.transitionTime / 2);
    } else {
      this.leftWidth = 100;
      this.rightWidth = 0;
      setTimeout(() => {
        this.right = false;
        if (this.width === 100) {
          this.left = true;
        }
      }, this.transitionTime / 2);
    }
  }

  close(): void {
    this.onClose.emit();
  }
}
