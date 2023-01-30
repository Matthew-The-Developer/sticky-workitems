import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu, WorkItem } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuInfo!: Menu;
  @Output() onCreate: EventEmitter<WorkItem> = new EventEmitter<WorkItem>();
  
  constructor() { }

  ngOnInit(): void {
  }

  create(workItem: WorkItem): void {
    this.onCreate.emit(workItem);
  }
}
