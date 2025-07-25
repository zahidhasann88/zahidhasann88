import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalState } from '../models/global-state.model';
import { GLOBAL_STATE } from '../data/static-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private stateSubject = new BehaviorSubject<Readonly<GlobalState>>(
    GLOBAL_STATE
  );

  constructor(private http: HttpClient) {}

  getState(): Observable<Readonly<GlobalState>> {
    return this.stateSubject.asObservable();
  }
}
