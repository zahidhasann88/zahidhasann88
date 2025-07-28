import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Project {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconDefinition;
}

export interface QuickStat {
  number: string;
  label: string;
  icon: IconDefinition;
}

export interface Link {
  url: string;
  text: string;
  icon: IconDefinition;
}

export interface DateLabel {
  text: string;
  icon: IconDefinition;
}

export interface TimelineItem {
  title: string;
  description: string;
  link?: Link;
  dateLabel?: DateLabel;
  techTags?: string[];
}

export interface TimelineSection {
  title?: string;
  items: TimelineItem[];
}

export interface AboutMe {
  part1: string;
  part2: string;
  part3: string;
  timelineSections: TimelineSection[];
}

export interface ProfileInfo {
  name: string;
  title: string;
  greeting: string;
  tagline: string;
}

export interface Icons {
  faArrowLeft: IconDefinition;
  faGithub: IconDefinition;
  faLinkedin: IconDefinition;
  faTwitter: IconDefinition;
  faEnvelope: IconDefinition;
  faBrain: IconDefinition;
  faCalendar: IconDefinition;
  faHeart: IconDefinition;
  faLightbulb: IconDefinition;
  faCoffee: IconDefinition;
  faCode: IconDefinition;
  faRocket: IconDefinition;
  faUsers: IconDefinition;
  faBug: IconDefinition;
  faBookOpen: IconDefinition;
  faGamepad: IconDefinition;
  faMusic: IconDefinition;
  faCamera: IconDefinition;
  faMountain: IconDefinition;
  faQuoteLeft: IconDefinition;
  faHandshake: IconDefinition;
  faGraduationCap: IconDefinition;
  faTrophy: IconDefinition;
  faTools: IconDefinition;
  faArrowRightLong: IconDefinition;
  faXTwitter: IconDefinition;
  faStackOverflow: IconDefinition;
  faMedium: IconDefinition;
}

export interface Config {
  cvLink: string;
  profile: ProfileInfo;
  aboutMe: AboutMe;
  projects: Project[];
  socialLinks: SocialLink[];
  icons: Icons;
}
