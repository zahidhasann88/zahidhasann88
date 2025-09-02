import { Config } from '../models/config.interfaces';
import {
  APP_CONSTANTS,
  FONT_AWESOME_ICONS,
  PROJECT_DATA,
  SOCIAL_LINKS_DATA,
  CONTENT_DATA,
} from '../utils/app.constants';

export const USER_CONFIG: Readonly<Config> = {
  cvLink: APP_CONSTANTS.URLS.CV_LINK,

  profile: {
    name: APP_CONSTANTS.PROFILE.NAME,
    title: APP_CONSTANTS.PROFILE.TITLE,
    greeting: APP_CONSTANTS.PROFILE.GREETING,
    tagline: APP_CONSTANTS.PROFILE.TAGLINE,
  },

  socialLinks: SOCIAL_LINKS_DATA,

  aboutMe: {
    part1: CONTENT_DATA.ABOUT_ME.PART_1,
    part2: CONTENT_DATA.ABOUT_ME.PART_2,
    part3: CONTENT_DATA.ABOUT_ME.PART_3,
    timelineSections: [
      {
        // What I Do Section
        items: [
          {
            title: 'Development',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.ENGINEERING,
            link: {
              url: APP_CONSTANTS.URLS.GITHUB,
              text: APP_CONSTANTS.BUTTONS.VIEW_GITHUB,
              icon: FONT_AWESOME_ICONS.BRANDS.GITHUB,
            },
          },
          {
            title: 'Product',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.PRODUCT,
            link: {
              url: APP_CONSTANTS.URLS.EMAIL,
              text: APP_CONSTANTS.TIMELINE_LABELS.GET_IN_TOUCH,
              icon: FONT_AWESOME_ICONS.SOLID.ENVELOPE,
            },
          },
          {
            title: 'Problem Solving',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.PROBLEM_SOLVING,
            link: {
              url: '#',
              text: APP_CONSTANTS.TIMELINE_LABELS.MY_APPROACH,
              icon: FONT_AWESOME_ICONS.SOLID.BRAIN,
            },
          },
        ],
      },
      {
        title: APP_CONSTANTS.SECTION_TITLES.SKILLS_TOOLS,
        items: [
          {
            title: 'Frontend Technologies',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.FRONTEND_TECH,
            dateLabel: {
              text: APP_CONSTANTS.TIMELINE_LABELS.INTEGRATION_FIRST,
              icon: FONT_AWESOME_ICONS.SOLID.CODE,
            },
            techTags: APP_CONSTANTS.TECH_TAGS.FRONTEND,
          },
          {
            title: 'Backend & Database',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.BACKEND_DB,
            dateLabel: {
              text: APP_CONSTANTS.TIMELINE_LABELS.SERVER_SIDE,
              icon: FONT_AWESOME_ICONS.SOLID.TOOLS,
            },
            techTags: APP_CONSTANTS.TECH_TAGS.BACKEND,
          },
          {
            title: 'Development Workflow',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.DEV_WORKFLOW,
            dateLabel: {
              text: APP_CONSTANTS.TIMELINE_LABELS.DEVOPS,
              icon: FONT_AWESOME_ICONS.SOLID.ROCKET,
            },
            techTags: APP_CONSTANTS.TECH_TAGS.DEVOPS,
          },
        ],
      },
      {
        title: APP_CONSTANTS.SECTION_TITLES.MY_JOURNEY,
        items: [
          {
            title: 'The Beginning: First Hello World',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.BEGINNING,
            dateLabel: {
              text: APP_CONSTANTS.DATE_LABELS.EARLY_YEARS,
              icon: FONT_AWESOME_ICONS.SOLID.CALENDAR,
            },
          },
          {
            title: 'Building Real Things',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.BUILDING_REAL,
            dateLabel: {
              text: APP_CONSTANTS.DATE_LABELS.BUILDING_PHASE,
              icon: FONT_AWESOME_ICONS.SOLID.CALENDAR,
            },
          },
          {
            title: 'Scaling & Architecture',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.SCALING_ARCH,
            dateLabel: {
              text: APP_CONSTANTS.DATE_LABELS.SCALING_PHASE,
              icon: FONT_AWESOME_ICONS.SOLID.CALENDAR,
            },
          },
          {
            title: 'Learning Something Great 😉',
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.LEARNING_GREAT,
            dateLabel: {
              text: APP_CONSTANTS.DATE_LABELS.CURRENT,
              icon: FONT_AWESOME_ICONS.SOLID.CALENDAR,
            },
          },
        ],
      },
      {
        title: APP_CONSTANTS.SECTION_TITLES.BEYOND_CODE,
        items: [
          {
            title: "When I'm Not Coding",
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.NOT_CODING,
            dateLabel: {
              text: APP_CONSTANTS.TIMELINE_LABELS.INTERESTS,
              icon: FONT_AWESOME_ICONS.SOLID.HEART,
            },
          },
          {
            title: "Let's Connect",
            description: CONTENT_DATA.TIMELINE_DESCRIPTIONS.LETS_CONNECT,
            dateLabel: {
              text: APP_CONSTANTS.TIMELINE_LABELS.COFFEE_CHAT,
              icon: FONT_AWESOME_ICONS.SOLID.COFFEE,
            },
          },
        ],
      },
    ],
  },

  projects: PROJECT_DATA,

  icons: {
    faArrowLeft: FONT_AWESOME_ICONS.SOLID.ARROW_LEFT,
    faArrowRightLong: FONT_AWESOME_ICONS.SOLID.ARROW_RIGHT_LONG,
    faGithub: FONT_AWESOME_ICONS.BRANDS.GITHUB,
    faLinkedin: FONT_AWESOME_ICONS.BRANDS.LINKEDIN,
    faTwitter: FONT_AWESOME_ICONS.BRANDS.X_TWITTER,
    faXTwitter: FONT_AWESOME_ICONS.BRANDS.X_TWITTER,
    faStackOverflow: FONT_AWESOME_ICONS.BRANDS.STACK_OVERFLOW,
    faMedium: FONT_AWESOME_ICONS.BRANDS.MEDIUM,
    faEnvelope: FONT_AWESOME_ICONS.SOLID.ENVELOPE,
    faBrain: FONT_AWESOME_ICONS.SOLID.BRAIN,
    faCalendar: FONT_AWESOME_ICONS.SOLID.CALENDAR,
    faHeart: FONT_AWESOME_ICONS.SOLID.HEART,
    faLightbulb: FONT_AWESOME_ICONS.SOLID.LIGHTBULB,
    faCoffee: FONT_AWESOME_ICONS.SOLID.COFFEE,
    faCode: FONT_AWESOME_ICONS.SOLID.CODE,
    faRocket: FONT_AWESOME_ICONS.SOLID.ROCKET,
    faUsers: FONT_AWESOME_ICONS.SOLID.USERS,
    faBug: FONT_AWESOME_ICONS.SOLID.BUG,
    faBookOpen: FONT_AWESOME_ICONS.SOLID.BOOK_OPEN,
    faGamepad: FONT_AWESOME_ICONS.SOLID.GAMEPAD,
    faMusic: FONT_AWESOME_ICONS.SOLID.MUSIC,
    faCamera: FONT_AWESOME_ICONS.SOLID.CAMERA,
    faMountain: FONT_AWESOME_ICONS.SOLID.MOUNTAIN,
    faQuoteLeft: FONT_AWESOME_ICONS.SOLID.QUOTE_LEFT,
    faHandshake: FONT_AWESOME_ICONS.SOLID.HANDSHAKE,
    faGraduationCap: FONT_AWESOME_ICONS.SOLID.GRADUATION_CAP,
    faTrophy: FONT_AWESOME_ICONS.SOLID.TROPHY,
    faTools: FONT_AWESOME_ICONS.SOLID.TOOLS,
  },
};
