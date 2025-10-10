import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Project {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly keywords: readonly string[];
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: IconDefinition;
}

export interface QuickStat {
  readonly number: string;
  readonly label: string;
  readonly icon: IconDefinition;
}

export interface Link {
  readonly url: string;
  readonly text: string;
  readonly icon: IconDefinition;
}

export interface DateLabel {
  readonly text: string;
  readonly icon: IconDefinition;
}

export interface TimelineItem {
  readonly title: string;
  readonly description: string;
  readonly link?: Link;
  readonly dateLabel?: DateLabel;
  readonly techTags?: readonly string[];
}

export interface TimelineSection {
  readonly title?: string;
  readonly items: readonly TimelineItem[];
}

export interface AboutMe {
  readonly part1: string;
  readonly part2: string;
  readonly part3: string;
  readonly timelineSections: readonly TimelineSection[];
}

export interface ProfileInfo {
  readonly name: string;
  readonly title: string;
  readonly greeting: string;
  readonly tagline: string;
}

export interface HomeComponentState {
  config: Config;
  projects: readonly Project[];
  socialLinks: readonly SocialLink[];
  currentYear: number;
}

export interface Icons {
  readonly faArrowLeft: IconDefinition;
  readonly faGithub: IconDefinition;
  readonly faLinkedin: IconDefinition;
  readonly faTwitter: IconDefinition;
  readonly faEnvelope: IconDefinition;
  readonly faBrain: IconDefinition;
  readonly faCalendar: IconDefinition;
  readonly faHeart: IconDefinition;
  readonly faLightbulb: IconDefinition;
  readonly faCoffee: IconDefinition;
  readonly faCode: IconDefinition;
  readonly faRocket: IconDefinition;
  readonly faUsers: IconDefinition;
  readonly faBug: IconDefinition;
  readonly faBookOpen: IconDefinition;
  readonly faGamepad: IconDefinition;
  readonly faMusic: IconDefinition;
  readonly faCamera: IconDefinition;
  readonly faMountain: IconDefinition;
  readonly faQuoteLeft: IconDefinition;
  readonly faHandshake: IconDefinition;
  readonly faGraduationCap: IconDefinition;
  readonly faTrophy: IconDefinition;
  readonly faTools: IconDefinition;
  readonly faArrowRightLong: IconDefinition;
  readonly faXTwitter: IconDefinition;
  readonly faStackOverflow: IconDefinition;
  readonly faMedium: IconDefinition;
  readonly faLocationDot: IconDefinition;
  readonly faBriefcase: IconDefinition;
}

export interface Config {
  readonly cvLink: string;
  readonly profile: ProfileInfo;
  readonly aboutMe: AboutMe;
  readonly projects: readonly Project[];
  readonly socialLinks: readonly SocialLink[];
  readonly icons: Icons;
}
