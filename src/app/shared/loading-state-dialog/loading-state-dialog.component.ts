import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderState, LoaderTime } from 'src/app/models/loader-state.model';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-loading-state-dialog',
  templateUrl: './loading-state-dialog.component.html',
  styleUrls: ['./loading-state-dialog.component.scss']
})
export class LoadingStateDialogComponent implements OnInit {
  LoaderTimeToMinMax: Map<LoaderTime, { min: number, max: number }> = new Map<LoaderTime, { min: number, max: number }>([
    [LoaderTime.None, { min: 0, max: 0 }],
    [LoaderTime.OneToThree, { min: 1000, max: 3000 }],
    [LoaderTime.ThreeToFive, { min: 3000, max: 5000 }],
    [LoaderTime.FiveToTen, { min: 5000, max: 10000 }],
  ]);

  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
  }

  get state$(): Observable<Map<string, LoaderState>> { return this.loadService.state$ }

  changeSuccess(name: string, { min, max }: LoaderState, successful: boolean): void {
    this.loadService.updateState(name, { successful, min, max });
  }

  changeTime(name: string, { successful }: LoaderState, time: LoaderTime): void {
    console.log(name, successful, time, this.LoaderTimeToMinMax.get(time));
    
    this.loadService.updateState(name, { successful, ...this.LoaderTimeToMinMax.get(time) ?? { min: 0, max: 0 } });
  }

  getLoadTimeFromMinMax({ min, max }: LoaderState): LoaderTime {
    console.log(min, max, min > 0 && max < 4)
    
    if (min > 0 && max < 4000) {
      return LoaderTime.OneToThree;
    } else if (min > 1000 && max < 6000) {
      return LoaderTime.ThreeToFive;
    } else if (min > 3000 && max < 11000) {
      return LoaderTime.FiveToTen;
    } else {
      return LoaderTime.None;
    }
  }
}
