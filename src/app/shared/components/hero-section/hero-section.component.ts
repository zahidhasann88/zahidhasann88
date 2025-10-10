import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SafeHtml } from '@angular/platform-browser';
import { SocialLink } from '../../../core/models/config.interfaces';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() profile: any;
  @Input() socialLinks: readonly SocialLink[] = [];
  @Input() icons: any;
  @Input() sectionTitles: any;
  @Output() socialLinkClick = new EventEmitter<SocialLink>();

  onSocialLinkClick(link: SocialLink): void {
    this.socialLinkClick.emit(link);
  }
}