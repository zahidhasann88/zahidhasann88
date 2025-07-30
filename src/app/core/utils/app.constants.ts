import {
  faArrowLeft,
  faBrain,
  faCalendar,
  faHeart,
  faLightbulb,
  faCoffee,
  faEnvelope,
  faCode,
  faRocket,
  faUsers,
  faBug,
  faBookOpen,
  faGamepad,
  faMusic,
  faCamera,
  faMountain,
  faQuoteLeft,
  faHandshake,
  faGraduationCap,
  faTrophy,
  faTools,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faStackOverflow,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

export const APP_CONSTANTS = {
  URLS: {
    CV_LINK:
      'https://drive.google.com/file/d/1B7ag_z_FhiPhLHr8TRSlsTCrHogveGiY/view?usp=sharing',
    GITHUB: 'https://github.com/zahidhasann88',
    LINKEDIN: 'https://linkedin.com/in/zahidhasann',
    TWITTER: 'https://x.com/zahidhasann15',
    STACK_OVERFLOW: 'https://stackoverflow.com/users/12301102/zahid-hasan',
    MEDIUM: 'https://medium.com/@jahidhasann67',
    EMAIL: 'mailto:zahidhasann67@gmail.com',
    LEETCODE: 'https://leetcode.com/u/zahidhasann67/',
  },

  PROFILE: {
    NAME: 'Zahid Hasan',
    TITLE: 'Full-Stack Engineer',
    GREETING: "👋 Hello, I'm Zahid!",
    TAGLINE: 'Full-Stack Engineer & Building Things for Internet',
    EMAIL: 'zahidhasann67@gmail.com',
  },

  TIMELINE_LABELS: {
    INTEGRATION_FIRST: 'Integration First',
    SERVER_SIDE: 'Server Side',
    DEVOPS: 'DevOps',
    INTERESTS: 'Interests',
    COFFEE_CHAT: 'Coffee Chat?',
    MY_APPROACH: 'My Approach',
    CURRENTLY: 'Currently',
    GET_IN_TOUCH: 'Get In Touch',
    VIEW_GITHUB: 'View GitHub',
  },

  DATE_LABELS: {
    EARLY_YEARS: '2017-2018',
    BUILDING_PHASE: '2019-2021',
    SCALING_PHASE: '2022-2024',
    CURRENT: 'Currently',
  },

  TECH_TAGS: {
    FRONTEND: ['Angular', 'React', 'TypeScript', 'SCSS', 'Tailwind', 'RxJS'],
    BACKEND: [
      'Golang',
      'Node.js',
      '.NET Core',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Docker',
    ],
    DEVOPS: ['Git', 'GitHub Actions', 'AWS', 'Jenkins', 'Jest', 'Mocha'],
  },

  SECTION_TITLES: {
    SKILLS_TOOLS: 'Skills & Tools.',
    MY_JOURNEY: 'My Journey.',
    BEYOND_CODE: 'Beyond the Code.',
    FEATURED_PROJECTS: 'Featured Projects',
    ABOUT_ME: 'About Me.',
    CONNECT_WITH_ME: 'Connect with me',
  },

  BUTTONS: {
    VIEW_RESUME: 'View Resume',
    GET_IN_TOUCH: 'Get In Touch',
    KNOW_MORE: 'Know More About Me',
    VIEW_GITHUB: 'View GitHub',
  },

  ANIMATIONS: {
    PAGE_LOAD_DURATION: 800,
    ROUTE_TRANSITION_DURATION: 600,
    HOVER_TRANSITION_DURATION: 300,
  },

  BREAKPOINTS: {
    MOBILE: '480px',
    TABLET: '768px',
    DESKTOP: '1024px',
    LARGE_DESKTOP: '1200px',
  },
} as const;

export const FONT_AWESOME_ICONS = {
  SOLID: {
    ARROW_LEFT: faArrowLeft,
    ARROW_RIGHT_LONG: faArrowRightLong,
    BRAIN: faBrain,
    CALENDAR: faCalendar,
    HEART: faHeart,
    LIGHTBULB: faLightbulb,
    COFFEE: faCoffee,
    ENVELOPE: faEnvelope,
    CODE: faCode,
    ROCKET: faRocket,
    USERS: faUsers,
    BUG: faBug,
    BOOK_OPEN: faBookOpen,
    GAMEPAD: faGamepad,
    MUSIC: faMusic,
    CAMERA: faCamera,
    MOUNTAIN: faMountain,
    QUOTE_LEFT: faQuoteLeft,
    HANDSHAKE: faHandshake,
    GRADUATION_CAP: faGraduationCap,
    TROPHY: faTrophy,
    TOOLS: faTools,
  },

  BRANDS: {
    GITHUB: faGithub,
    LINKEDIN: faLinkedin,
    X_TWITTER: faXTwitter,
    STACK_OVERFLOW: faStackOverflow,
    MEDIUM: faMedium,
  },
} as const;

export const PROJECT_DATA = [
  {
    name: 'kvstore',
    description:
      'A Redis-like key-value store implementation in Go with CLI interface and TCP server support.',
    url: 'https://github.com/zahidhasann88/kvstore',
    keywords: ['Redis-like', 'Go', 'CLI', 'TCP'],
  },
  {
    name: 'syncpipe',
    description:
      'A file synchronization tool over TCP using Node.js and TypeScript. SyncPipe provides real-time file synchronization between a server and multiple clients using raw TCP sockets.',
    url: 'https://github.com/zahidhasann88/syncpipe',
    keywords: ['TypeScript', 'Node.js', 'CLI', 'TCP', 'SyncPipe'],
  },
  {
    name: 'webhook-gateway',
    description:
      'A webhook gateway built with .NET 9 that provides reliable webhook delivery with retry logic, exponential backoff, and dead letter queue handling.',
    url: 'https://github.com/zahidhasann88/webhook-gateway',
    keywords: ['webhook', '.NET 9', 'exponential backoff'],
  },
  {
    name: 'audio-analyzer',
    description:
      'A Flask API for video and audio analysis using OpenAI Whisper and Hugging Face. Features speech-to-text conversion, content summarization, quality checks, and streaming optimization.',
    url: 'https://github.com/zahidhasann88/audio-analyzer',
    keywords: [
      'Flask',
      'OpenAI Whisper',
      'Hugging Face',
      'speech-to-text',
      'API',
    ],
  },
] as const;

export const SOCIAL_LINKS_DATA = [
  {
    name: 'GitHub',
    url: APP_CONSTANTS.URLS.GITHUB,
    icon: FONT_AWESOME_ICONS.BRANDS.GITHUB,
  },
  {
    name: 'LinkedIn',
    url: APP_CONSTANTS.URLS.LINKEDIN,
    icon: FONT_AWESOME_ICONS.BRANDS.LINKEDIN,
  },
  {
    name: 'Twitter',
    url: APP_CONSTANTS.URLS.TWITTER,
    icon: FONT_AWESOME_ICONS.BRANDS.X_TWITTER,
  },
  {
    name: 'Stack Overflow',
    url: APP_CONSTANTS.URLS.STACK_OVERFLOW,
    icon: FONT_AWESOME_ICONS.BRANDS.STACK_OVERFLOW,
  },
  {
    name: 'Medium',
    url: APP_CONSTANTS.URLS.MEDIUM,
    icon: FONT_AWESOME_ICONS.BRANDS.MEDIUM,
  },
  {
    name: 'Email',
    url: APP_CONSTANTS.URLS.EMAIL,
    icon: FONT_AWESOME_ICONS.SOLID.ENVELOPE,
  },
  {
    name: 'Leetcode',
    url: APP_CONSTANTS.URLS.LEETCODE,
    icon: FONT_AWESOME_ICONS.SOLID.CODE,
  },
] as const;

export const CONTENT_DATA = {
  ABOUT_ME: {
    PART_1: `My name is Zahid Hasan, also known as Zahid. I'm a Software Engineer based in Dhaka, Bangladesh.`,
    PART_2: `Currently, my focus is on web applications and infrastructure, with a background interest in cloud technologies and distributed systems. I'm passionate about finding creative solutions to complex challenges and building tools that empower others to achieve more.`,
    PART_3: ` Welcome to my web corner where I share my journey in software development and explore new technologies that keep me curious and motivated.`,
  },

  TIMELINE_DESCRIPTIONS: {
    ENGINEERING: `At the core of every great application is a backend that's thoughtfully built and resilient. I specialize in building that foundation—developing APIs that manage data efficiently, designing scalable database architectures, and ensuring systems remain reliable as they grow. While I thrive behind the scenes, I also step into frontend development to bridge the gap and deliver cohesive user experiences. Writing clean, maintainable code is a priority because I believe software should be intuitive to understand and easy to evolve. I enjoy breaking down complex problems and turning them into practical, high-performing solutions. For me, engineering is about balancing precision and pragmatism to build tools that work — reliably and quietly.`,

    PRODUCT: `Great products begin with a deep understanding of the real problems people face. I enjoy collaborating closely with teams to bridge the gap between user needs and practical solutions we can build. My approach focuses on asking thoughtful questions, prototyping early, and iterating based on feedback. Over time, I've learned that building something truly valuable isn't just about adding features — it's about knowing what to leave out to keep things simple and effective.`,

    PROBLEM_SOLVING: `Every bug is a puzzle, every feature is an opportunity to make someone's day better. I approach problems methodically—breaking them down, understanding the root cause, and finding solutions that are sustainable. I'm that person who actually enjoys debugging sessions and finds satisfaction in refactoring messy code into something beautiful. Sometimes the best solution is the simplest one.`,

    FRONTEND_TECH: `More than just what users see, the frontend is about making sure everything runs smoothly behind the scenes — syncing perfectly with backend systems and delivering a seamless, dependable experience. Crafting components that communicate well, manage data efficiently, and respond without delay is essential. The goal is to simplify complex processes into interfaces that feel natural and reliable. Keeping up with the latest frontend tools helps keep these systems strong and adaptable.`,

    BACKEND_DB: `Backends are where the core of an application lives — the place where complex logic, data, and performance come together. My focus is on crafting APIs that don't just work, but feel clear and predictable for frontend teams to build upon. I design databases with growth in mind, so they can handle increasing demands without breaking a sweat. Performance and security aren't just boxes to check; they're woven into the fabric of everything I build, ensuring the system stays strong and reliable long-term.`,

    DEV_WORKFLOW: `Good tools make good developers great. I'm passionate about setting up development environments that boost productivity and reduce friction. From automated testing to deployment pipelines, I believe in investing time upfront to save hours later.`,

    BEGINNING: `Started my coding journey with a simple HTML page and thought I was a wizard when I made text change colors. Those late nights learning JavaScript fundamentals, struggling with CSS layouts, and the pure joy of seeing my first dynamic web page work—that's when I knew I found my calling. Every error message was a lesson, and every working feature felt like magic.`,

    BUILDING_REAL: `This is when things got serious. Started building actual applications that people could use, not just tutorial projects. Learned about databases, APIs, authentication, and all the "boring" stuff that makes applications actually work in the real world. Also discovered that deployment is an art form and that "it works on my machine" is not a valid argument.`,

    SCALING_ARCH: `Started thinking beyond individual features to entire systems. Learned about microservices, database optimization, caching strategies, and how to design systems that don't fall over when more than 10 people use them. Discovered that premature optimization is real, but so is the pain of rebuilding everything when you didn't plan for growth.`,

    LEARNING_GREAT: `We continue learning everyday.`,

    NOT_CODING: `I'm a curious person by nature. I love reading about technology trends, watching YouTube videos about random engineering topics, and occasionally attempting to cook something more complex than instant noodles (with mixed results). I also enjoy long walks where I inevitably end up thinking about code architecture or that bug I couldn't fix earlier.`,

    LETS_CONNECT: `I'm always up for interesting conversations about technology, product development, or just about anything really. Whether you want to discuss a project idea, share a cool technical challenge, or just chat about the latest developments in our field, feel free to reach out. The best collaborations often start with simple conversations.`,
  },
} as const;

export type AppConstantsType = typeof APP_CONSTANTS;
export type FontAwesomeIconsType = typeof FONT_AWESOME_ICONS;
export type ProjectDataType = typeof PROJECT_DATA;
export type SocialLinksDataType = typeof SOCIAL_LINKS_DATA;
export type ContentDataType = typeof CONTENT_DATA;
