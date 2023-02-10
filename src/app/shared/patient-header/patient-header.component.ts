import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Observable } from 'rxjs';
import { MenuSection, WorkItem } from 'src/app/models/menu.model';
import { PatientHeaderMode } from 'src/app/models/patient-header-mode.enum';
import { Patient } from 'src/app/models/patient.model';
import { WorkItemService } from 'src/app/work-items/services/work-item.service';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.scss']
})
export class PatientHeaderComponent implements OnInit, AfterViewInit {
  @Input() patient$: Observable<Patient | null> = new Observable<Patient | null>();
  @ViewChild(MatCard, { read: ElementRef }) card!: ElementRef<HTMLElement>;

  mode: boolean = true;

  constructor(private workItemService: WorkItemService) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.card, this.card.nativeElement);
    const observer = new ResizeObserver(entries => {
      const height = entries[0].contentRect.height + 2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.workItemService.setHeight(height);
    });
    observer.observe(this.card.nativeElement);
  }

  changeMode(): void {
    this.mode = !this.mode;
  }

  createWorkItems(section: MenuSection): void { this.workItemService.createWorkItems(section) }
  createWorkItem(workItem: WorkItem): void { this.workItemService.createWorkItem(workItem) }
  deleteWorkItems(): void { this.workItemService.deleteWorkItems() }
}
