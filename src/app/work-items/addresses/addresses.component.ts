import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
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
  @Input() isNested = false;
  @ViewChild(WorkitemWrapperComponent, {read: ElementRef}) wrapper!: ElementRef<HTMLElement>;
  
  _addresses: BehaviorSubject<Address[] | null | (() => string)> = new BehaviorSubject<Address[] | null | (() => string)>(null);
  _selected: BehaviorSubject<Address | null> = new BehaviorSubject<Address | null>(null);
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

  ngOnInit(): void { this.load() }

  get addresses$(): Observable<Address[] | null | (() => string)> { return this._addresses.asObservable() }
  get selected$(): Observable<Address | null> { return this._selected.asObservable() }
  get title(): string { return this.workItem.label }

  retry(): void {
    this.load();
  }

  add(): void {
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this._selected.next(null);
    this.opened = true;
  }

  edit(address: Address): void {
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this._selected.next(address);
    this.opened = true;
  }

  cancel(): void {
    this.opened = false;
    this._selected.next(null);  
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  close(): void { this.workItemService.deleteWorkItem(this.workItem) }

  streetAddress(address: Address): string { return address.streetAddressTwo ? `${address.streetAddressOne}, ${address.streetAddressTwo}` : address.streetAddressOne }
  cityStateZip(address: Address): string { return `${address.city}, ${address.state}, ${address.zip}` }

  private load(): void {
    this._addresses = new BehaviorSubject<Address[] | null | (() => string)>(null);
    this._selected = new BehaviorSubject<Address | null>(null);
    
    this.addressesService.getAddresses().subscribe({
      next: addresses => this._addresses.next(addresses),
      error: () => this._addresses.next(() => 'Could not retrieve Address')
    });
  }
}
