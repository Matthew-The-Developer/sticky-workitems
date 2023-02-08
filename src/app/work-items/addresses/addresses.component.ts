import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';
import { WorkItem } from 'src/app/models/menu.model';
import { WorkitemWrapperComponent } from 'src/app/shared/workitem-wrapper/workitem-wrapper.component';
import { AddressesService } from '../services/addresses.service';
import { WorkItemService } from '../services/work-item.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  @ViewChild(WorkitemWrapperComponent, {read: ElementRef}) wrapper!: ElementRef<HTMLElement>;
  
  _addresses: BehaviorSubject<Address[] | null> = new BehaviorSubject<Address[] | null>(null);
  addressColumns: string[] = ['type', 'address', 'city-state-zip', 'country', 'actions']; 

  opened: boolean = false;
  workItem: WorkItem = {
    label: 'Addresses'
  };

  LoaderTemplate = LoaderTemplate;

  constructor(
    private addressesService: AddressesService,
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
    this._addresses = new BehaviorSubject<Address[] | null>(null);

    this.addressesService.getAddresses().subscribe({
      next: addresses => this._addresses.next(addresses)
    });
  }

  get addresses$(): Observable<Address[] | null> { return this._addresses.asObservable() }
  get title(): string { return this.workItem.label }

  toggle(): void {
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.opened = !this.opened;
  }

  close(): void { this.workItemService.deleteWorkItem(this.workItem) }

  streetAddress(address: Address): string { return address.streetAddressTwo ? `${address.streetAddressOne}, ${address.streetAddressTwo}` : address.streetAddressOne }
  cityStateZip(address: Address): string { return `${address.city}, ${address.state}, ${address.zip}` }
}
