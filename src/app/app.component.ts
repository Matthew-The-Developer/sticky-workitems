import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingStateDialogComponent } from './shared/loading-state-dialog/loading-state-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  openLoadingState(): void {
    this.dialog.open(LoadingStateDialogComponent, {
      maxWidth: '50%',
      hasBackdrop: false,
      panelClass: 'loader-state-dialog'
    })
  }
}
