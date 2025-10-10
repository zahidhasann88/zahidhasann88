import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faBriefcase, faGraduationCap, faCode, faTrophy } from '@fortawesome/free-solid-svg-icons';

export interface TabItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-portfolio-tabs',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './portfolio-tabs.component.html',
  styleUrls: ['./portfolio-tabs.component.scss']
})
export class PortfolioTabsComponent implements OnInit {
  @Input() tabs: TabItem[] = [];
  @Input() activeTab: string = 'about';
  @Output() tabChange = new EventEmitter<string>();

  // Icons
  readonly icons = {
    faUser,
    faBriefcase,
    faGraduationCap,
    faCode,
    faTrophy
  };

  constructor() { }

  ngOnInit(): void {
  }

  switchTab(tabId: string): void {
    this.tabChange.emit(tabId);
  }

  isActiveTab(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  getTabIcon(iconName: string) {
    const iconMap: { [key: string]: any } = {
      'faUser': this.icons.faUser,
      'faBriefcase': this.icons.faBriefcase,
      'faGraduationCap': this.icons.faGraduationCap,
      'faCode': this.icons.faCode,
      'faTrophy': this.icons.faTrophy
    };
    return iconMap[iconName] || this.icons.faUser;
  }
}