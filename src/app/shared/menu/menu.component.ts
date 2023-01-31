import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu, MenuSection, WorkItem } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuInfo!: Menu;
  @Output() onSectionCreate: EventEmitter<MenuSection> = new EventEmitter<MenuSection>();
  @Output() onCreate: EventEmitter<WorkItem> = new EventEmitter<WorkItem>();
  
  constructor() { }
  ngOnInit(): void { }

  createSection(section: MenuSection): void { this.onSectionCreate.emit(section) }
  create(workItem: WorkItem): void { this.onCreate.emit(workItem) }
}
