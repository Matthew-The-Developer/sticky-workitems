import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BackgroundInformation } from 'src/app/models/background-information.model';

@Injectable({
  providedIn: 'root'
})
export class BackgroundInformationService {

  constructor() { }

  getBackgroundInformation(): Observable<BackgroundInformation> {
    return of({});
  }
}
