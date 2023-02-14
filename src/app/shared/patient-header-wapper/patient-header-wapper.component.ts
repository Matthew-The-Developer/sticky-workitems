import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Observable } from 'rxjs';
import { PatientHeaderMode } from 'src/app/models/patient-header-mode.enum';
import { Patient } from 'src/app/models/patient.model';
import { WorkItemService } from 'src/app/work-items/services/work-item.service';

@Component({
  selector: 'app-patient-header-wapper',
  templateUrl: './patient-header-wapper.component.html',
  styleUrls: ['./patient-header-wapper.component.scss']
})
export class PatientHeaderWapperComponent implements OnInit {
  @Input() patient$: Observable<Patient | null> = new Observable<Patient | null>();
  @Input() default: 0 | 1 | 2 = 1;
  @ViewChild(MatCard, { read: ElementRef }) card!: ElementRef<HTMLElement>;
  
  mode: 0 | 1 | 2 = 0;
  direction: 1 | -1 = 1;

  PatientHeaderMode = PatientHeaderMode;

  constructor(private workItemService: WorkItemService) { }
  
  ngOnInit(): void {
    this.mode = this.default;
  }

  ngAfterViewInit(): void {
    const observer = new ResizeObserver(entries => this.workItemService.setHeight(entries[0].contentRect.height + 2 * parseFloat(getComputedStyle(document.documentElement).fontSize)));
    observer.observe(this.card.nativeElement);
  }

  get shouldExpand(): boolean { return this.direction === 1 }

  changeMode(): void {
    this.mode += this.direction;

    if (this.mode === 0) {
      this.direction = 1;
    } else if (this.mode === 2) {
      this.direction = -1;
    }
  }
}
