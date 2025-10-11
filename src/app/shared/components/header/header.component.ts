import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigService } from '../../../core/services/config.service';
import { ThemeService } from '../../../core/services/theme.service';
import { APP_CONSTANTS, FONT_AWESOME_ICONS } from '../../../core/utils/app.constants';
import { Config } from '../../../core/models/config.interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly configService = inject(ConfigService);
  readonly themeService = inject(ThemeService);
  
  readonly constants = APP_CONSTANTS;
  readonly icons = FONT_AWESOME_ICONS;

  navItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
  ];

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  onResumeClick(): void {
    this.configService.getConfig().subscribe((config: Config) => {
      if (config?.cvLink) {
        window.open(config.cvLink, '_blank');
      }
    });
  }

  onThemeToggle(): void {
    this.themeService.toggleTheme();
  }

  getThemeIcon() {
    const theme = this.themeService.theme();
    const isDark = this.themeService.isDarkMode();
    
    // Show the icon for what clicking will switch TO
    if (theme === 'system') {
      // On system mode, show icon for opposite of current appearance
      return isDark ? this.icons.SOLID.SUN : this.icons.SOLID.MOON;
    } else {
      // On manual mode, show icon for opposite of current setting
      return theme === 'light' ? this.icons.SOLID.MOON : this.icons.SOLID.SUN;
    }
  }

  get buttonLabels() {
    return this.constants.BUTTONS;
  }
}
