import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-workitem-wrapper',
  templateUrl: './workitem-wrapper.component.html',
  styleUrls: ['./workitem-wrapper.component.scss']
})
export class WorkitemWrapperComponent implements OnInit {
  @Input() title!: string;
  @Input() opened: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  close(): void {
    this.onClose.emit();
  }
}
