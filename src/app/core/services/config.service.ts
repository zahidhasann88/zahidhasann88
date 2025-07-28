import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from '../models/config.interfaces';
import { USER_CONFIG } from '../utils/config/user.config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configSubject = new BehaviorSubject<Readonly<Config>>(USER_CONFIG);

  constructor() {}

  getConfig(): Observable<Readonly<Config>> {
    return this.configSubject.asObservable();
  }
}
