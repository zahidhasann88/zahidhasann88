import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalState } from '../models/global-state.model';
import { GLOBAL_STATE } from '../data/static-data';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private stateSubject = new BehaviorSubject<Readonly<GlobalState>>(
    GLOBAL_STATE
  );

  constructor() {}

  getState(): Observable<Readonly<GlobalState>> {
    return this.stateSubject.asObservable();
  }
}
