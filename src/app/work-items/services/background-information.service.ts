import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BackgroundInformation, Ethnicity, MartialStatus, Race } from 'src/app/models/background-information.model';

@Injectable({
  providedIn: 'root'
})
export class BackgroundInformationService {

  constructor() { }

  getBackgroundInformation(): Observable<BackgroundInformation> {
    return of({
      martialStatus: MartialStatus.Single,
      ethnicity: Ethnicity.NotHispanicOrLatino,
      race: Race.White
    });
  }
}
