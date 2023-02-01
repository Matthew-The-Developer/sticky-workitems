import { Component, Input, OnInit } from '@angular/core';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';

@Component({
  selector: 'app-loader-template',
  templateUrl: './loader-template.component.html',
  styleUrls: ['./loader-template.component.scss']
})
export class LoaderTemplateComponent implements OnInit {
  @Input() template: LoaderTemplate = LoaderTemplate.Menu;
  @Input() count: number = 1;

  LoaderTemplate = LoaderTemplate;
  items: number[] = [];

  constructor() { }
  ngOnInit(): void {
    this.items = Array(this.count).fill(0).map((x, i)=> i);
  }
}
