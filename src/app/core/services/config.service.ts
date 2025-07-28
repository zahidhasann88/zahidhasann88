import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Config, Project, SocialLink } from '../models/config.interfaces';
import { USER_CONFIG } from '../config/user.config';
import { APP_CONSTANTS } from '../utils/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly configSubject = new BehaviorSubject<Readonly<Config>>(
    USER_CONFIG
  );
  private readonly config$ = this.configSubject.asObservable();

  constructor() {}

  getConfig(): Observable<Readonly<Config>> {
    return this.config$;
  }

  getProfile(): Observable<Config['profile']> {
    return this.config$.pipe(map((config) => config.profile));
  }

  getSocialLinks(): Observable<readonly SocialLink[]> {
    return this.config$.pipe(map((config) => config.socialLinks));
  }

  getProjects(): Observable<readonly Project[]> {
    return this.config$.pipe(map((config) => config.projects));
  }

  getAboutMe(): Observable<Config['aboutMe']> {
    return this.config$.pipe(map((config) => config.aboutMe));
  }

  getIcons(): Observable<Config['icons']> {
    return this.config$.pipe(map((config) => config.icons));
  }

  getCvLink(): Observable<string> {
    return this.config$.pipe(map((config) => config.cvLink));
  }

  getAppConstants(): typeof APP_CONSTANTS {
    return APP_CONSTANTS;
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getContactEmail(): string {
    return APP_CONSTANTS.PROFILE.EMAIL;
  }

  updateConfig(newConfig: Partial<Config>): void {
    const currentConfig = this.configSubject.value;
    const updatedConfig = { ...currentConfig, ...newConfig };
    this.configSubject.next(updatedConfig);
  }

  resetConfig(): void {
    this.configSubject.next(USER_CONFIG);
  }
}
