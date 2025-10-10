import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly THEME_KEY = 'portfolio-theme';

  public readonly theme = signal<Theme>('system');
  public readonly isDarkMode = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();

      effect(
        () => {
          this.applyTheme(this.theme());
        },
        { allowSignalWrites: true }
      );

      this.setupSystemThemeListener();
    }
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;

    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      this.theme.set(savedTheme);
    } else {
      this.theme.set('system');
    }
  }

  private setupSystemThemeListener(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', (e) => {
      if (this.theme() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  private applyTheme(theme: Theme): void {
    this.updateDarkModeState();

    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.classList.remove('light-theme', 'dark-theme');

      const themeClass = this.isDarkMode() ? 'dark-theme' : 'light-theme';
      htmlElement.classList.add(themeClass);
      console.log('Theme: Applied class:', themeClass, 'to HTML element');
    }

    localStorage.setItem(this.THEME_KEY, theme);
  }

  private updateDarkModeState(): void {
    let isDark = false;
    const currentTheme = this.theme();

    switch (currentTheme) {
      case 'dark':
        isDark = true;
        break;
      case 'light':
        isDark = false;
        break;
      case 'system':
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.media !== 'not all') {
          isDark = mediaQuery.matches;
          console.log(
            'Theme: System preference detected:',
            isDark ? 'dark' : 'light'
          );
        } else {
          isDark = false;
          console.log('Theme: System preference not supported, using light');
        }
        break;
    }

    console.log(
      'Theme: Setting dark mode to:',
      isDark,
      'for theme:',
      currentTheme
    );
    this.isDarkMode.set(isDark);
  }

  public setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  public toggleTheme(): void {
    const currentTheme = this.theme();
    let newTheme: Theme;

    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = this.isDarkMode() ? 'light' : 'dark';
    }

    this.setTheme(newTheme);
  }

  public getEffectiveTheme(): 'light' | 'dark' {
    return this.isDarkMode() ? 'dark' : 'light';
  }

  public getThemeDisplayName(): string {
    const theme = this.theme();
    switch (theme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Mode';
      default:
        return 'Light Mode';
    }
  }
}
