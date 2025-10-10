import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigService } from '../../../core/services/config.service';
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
  
  readonly constants = APP_CONSTANTS;
  readonly icons = FONT_AWESOME_ICONS;

  navItems = [
    { path: '/home', label: 'Home' },
  ];

  onResumeClick(): void {
    this.configService.getConfig().subscribe((config: Config) => {
      if (config?.cvLink) {
        window.open(config.cvLink, '_blank');
      }
    });
  }

  get buttonLabels() {
    return this.constants.BUTTONS;
  }
}
