import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  @Input() certificationsData: CertificationItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}