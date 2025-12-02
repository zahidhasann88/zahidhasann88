import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';

import {
  pageLoadAnimation,
  routeAnimations,
} from '../../core/utils/animation/animations';
import {
  Config,
  HomeComponentState,
  Project,
  SocialLink,
} from '../../core/models/config.interfaces';
import { ConfigService } from '../../core/services/config.service';
import { HighlightService } from '../../core/services/highlight.service';

// Import new components
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { AboutMeComponent } from '../../shared/components/about-me/about-me.component';
import { ExperienceComponent } from '../../shared/components/experience/experience.component';
import { EducationComponent } from '../../shared/components/education/education.component';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { CertificationsComponent } from '../../shared/components/certifications/certifications.component';
import { APP_CONSTANTS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FontAwesomeModule,
    HeroSectionComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly configService = inject(ConfigService);
  private readonly highlightService = inject(HighlightService);

  private readonly destroy$ = new Subject<void>();

  componentState!: HomeComponentState;

  readonly constants = APP_CONSTANTS;

  // Experience data
  readonly experienceData = [
    {
      company: 'Satcom IT Limited.',
      position: 'Software Engineer',
      period: '2022 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'At Satcom, I contributed to the development of ERP solutions such as the RMG product and the CA student result automation system, building backend services with Node.js and Go and designing scalable microservices to enhance system reliability and performance. I implemented high-speed, event-driven data pipelines using Kafka and Redis, simplified legacy modules into maintainable services, and facilitated seamless client-server integration, while also improving deployment workflows through automated CI/CD pipelines.',
      achievements: [
      ]
    },
    {
      company: 'PQS Japan.',
      position: 'Junior Software Engineer',
      period: '2021 - 2022',
      location: 'Dhaka, Bangladesh',
      description: 'I worked on developing enterprise-grade features that supported large operational workflows with a focus on reliability and scalability. I improved automated reporting processes to reduce errors and strengthen system stability, and created reusable interface components that accelerated delivery across multiple teams. I also collaborated closely with cross-functional stakeholders to ship major features within tight timelines.',
      achievements: [
      ]
    },
    {
      company: 'Karmasangsthan Limited.',
      position: 'Software Developer',
      period: '2020 - 2021',
      location: 'Remote',
      description: 'My role centered on enhancing the labour-market platform by improving workflow efficiency, strengthening access control processes, and refining interface consistency. I focused on delivering scalable improvements that elevated user experience and overall system reliability.',
      achievements: [
      ]
    }
  ];

  // Education data
  readonly educationData = [
    {
      institution: 'Daffodil International University',
      degree: 'Bachelor of Science in Software Engineering',
      period: '2017 - 2020',
      location: 'Dhaka, Bangladesh',
      description: 'Focused on software engineering, algorithms, and system design. Participated in programming competitions and technical projects.',
      achievements: [
      ]
    }
  ];

  // Skills data
  readonly skillsData = {
    technical: [
      { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'] },
      { category: 'Backend', skills: ['Node.js', 'Express.js', 'Golang', 'Gin', 'REST APIs'] },
      { category: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Database Design'] },
      { category: 'Cloud & DevOps', skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'] },
    ],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Mentoring', 'Adaptability']
  };

  // Certifications data
  readonly certificationsData = [
    {
      name: 'AWS Educate Introduction to 101',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: '148239f4-1caf-4adb-929a-5a4fae50f9b0',
      description: 'Introduction to Cloud 101 – Gained foundational knowledge of AWS cloud services, created simple cloud applications in a virtual lab, and understood key technical roles for cloud computing success..'
    },
    {
      name: 'AI For Everyone',
      issuer: 'Coursera',
      date: '2020',
      credentialId: '4Z8LV2GW58V2',
      description: 'Learned the fundamentals of artificial intelligence, including its capabilities, limitations, and applications across industries. Gained insights into how AI impacts business strategy, workflow automation, and data-driven decision-making. Developed an understanding of AI terminology, ethical considerations, and how to implement AI solutions effectively in real-world scenarios.'
    }
  ];

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeComponent(): void {
    combineLatest({
      config: this.configService.getConfig(),
      projects: this.configService.getProjects(),
      socialLinks: this.configService.getSocialLinks(),
    })
      .pipe(
        map(({ config, projects, socialLinks }) => ({
          config,
          projects,
          socialLinks,
          currentYear: this.configService.getCurrentYear(),
        })),
        takeUntil(this.destroy$)
      )
      .subscribe((state) => {
        this.componentState = state;
      });
  }

  getHighlightedDescription(
    description: string,
    keywords: readonly string[]
  ): SafeHtml {
    return this.highlightService.highlightKeywords(description, keywords);
  }

  getHighlightedText(text: string): SafeHtml {
    return this.highlightService.highlightNumbers(text);
  }

  onContactClick(): void {
    window.location.href = `mailto:${this.constants.PROFILE.EMAIL}`;
  }

  onSocialLinkClick(socialLink: SocialLink): void {
    window.open(socialLink.url, '_blank');
  }

  onProjectLinkClick(project: Project): void {
    window.open(project.url, '_blank');
  }

  get buttonLabels() {
    return this.constants.BUTTONS;
  }

  get sectionTitles() {
    return this.constants.SECTION_TITLES;
  }

  get profile() {
    return this.componentState?.config?.profile;
  }

  get aboutMe() {
    return this.componentState?.config?.aboutMe;
  }

  get icons() {
    return this.componentState?.config?.icons;
  }

  get isLoaded(): boolean {
    return !!this.componentState;
  }
}
