import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() theme: any;
  @HostBinding('style') hostStyle: any;

  ngOnInit(): void {
    this.hostStyle = this.theme;
  }
}
