import { Injectable } from '@angular/core';
import { delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { CoordinationBenefit, CoordinationBenefitStatus } from 'src/app/models/coordination-benefit.model';
import { LoadService } from 'src/app/services/load.service';

@Injectable({
  providedIn: 'root'
})
export class CoordinationOfBenefitsService {
  constructor(private loadService: LoadService) { }

  getBenefits(): Observable<CoordinationBenefit[]> {
    const state = this.loadService.getState('coordination of benefits');

    if (state.successful) {
      return of([
        {
          enterDate: new Date(),
          reviewDate: new Date(),
          verifiedDate: new Date(),
          enteredBy: '12345',
          status: CoordinationBenefitStatus.Pending,
          recommendedPrimary: 'Walk it off'
        },
        {
          enterDate: new Date(),
          reviewDate: new Date(),
          verifiedDate: new Date(),
          enteredBy: '345345',
          status: CoordinationBenefitStatus.InProgress,
          recommendedPrimary: 'Insert Straw',
          recommendedSecondary: 'Suck it up',
        },
        {
          enterDate: new Date(),
          reviewDate: new Date(),
          verifiedDate: new Date(),
          enteredBy: '567568',
          status: CoordinationBenefitStatus.Completed,
          cobDate: new Date(),
          recommendedPrimary: 'Take Life\'s lemons',
          recommendedSecondary: 'Make lemonade',
        },
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }
}
