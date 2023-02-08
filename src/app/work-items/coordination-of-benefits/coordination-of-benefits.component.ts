import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinationBenefit } from 'src/app/models/coordination-benefit.model';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';
import { WorkItem } from 'src/app/models/menu.model';
import { WorkitemWrapperComponent } from 'src/app/shared/workitem-wrapper/workitem-wrapper.component';
import { WorkItemService } from '../services/work-item.service';

@Component({
  selector: 'app-coordination-of-benefits',
  templateUrl: './coordination-of-benefits.component.html',
  styleUrls: ['./coordination-of-benefits.component.scss']
})
export class CoordinationOfBenefitsComponent implements OnInit {
  @ViewChild(WorkitemWrapperComponent, {read: ElementRef}) wrapper!: ElementRef<HTMLElement>;

  _benefits: BehaviorSubject<CoordinationBenefit[] | null> = new BehaviorSubject<CoordinationBenefit[] | null>(null);
  benefitColumns: string[] = ['date-entered', 'date-reviewed', 'date-verified', 'entered-by', 'status', 'cob-date', 'recommended-primary', 'recommended-secondary', 'actions'];

  error: string | null = null;
  opened: boolean = false;
  workItem: WorkItem = {
    label: 'Coordination of Benefits'
  };

  LoaderTemplate = LoaderTemplate;

  constructor(
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
  }

  get benefits$(): Observable<CoordinationBenefit[] | null> { return this._benefits.asObservable() }
  get title(): string { return this.workItem.label }

  close(): void {
    this.workItemService.deleteWorkItem(this.workItem);
  }
}
