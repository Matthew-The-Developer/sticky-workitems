import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BackgroundInformation } from 'src/app/models/background-information.model';
import { WorkItem } from 'src/app/models/menu.model';
import { WorkitemWrapperComponent } from 'src/app/shared/workitem-wrapper/workitem-wrapper.component';
import { BackgroundInformationService } from '../services/background-information.service';
import { WorkItemService } from '../services/work-item.service';

@Component({
  selector: 'app-background-information',
  templateUrl: './background-information.component.html',
  styleUrls: ['./background-information.component.scss']
})
export class BackgroundInformationComponent implements OnInit {
  @ViewChild(WorkitemWrapperComponent, {read: ElementRef}) wrapper!: ElementRef<HTMLElement>;

  _backgroundInformation: BehaviorSubject<BackgroundInformation | null> = new BehaviorSubject<BackgroundInformation | null>(null);

  opened: boolean = false;
  workItem: WorkItem = {
    label: 'Background Information'
  };
  
  constructor(
    private backgroundInformationService: BackgroundInformationService,
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
    this._backgroundInformation = new BehaviorSubject<BackgroundInformation | null>(null);

    this.backgroundInformationService.getBackgroundInformation().subscribe((backgroundInformation: BackgroundInformation) => this._backgroundInformation.next(backgroundInformation));
  }

  get title(): string { return this.workItem.label }

  toggle(): void {
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.opened = !this.opened;
  }

  close(): void {
    this.workItemService.deleteWorkItem(this.workItem);
  }
}
