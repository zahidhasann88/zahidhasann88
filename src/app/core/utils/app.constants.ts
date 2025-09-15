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
      'https://drive.google.com/file/d/1yazt7VCmWK9K3phh6JNmggA1JHl15pEX/view?usp=sharing',
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
    TAGLINE: 'Software Engineer & Building Things for Internet',
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
    PART_1: `Hi, I’m Zahid Hasan, a Software Engineer from Dhaka, Bangladesh. I have over 4 years of experience creating software that’s reliable, easy to use, and built to adapt as needs grow. Most of my work focuses on backend development—building APIs, designing databases, and shaping system architecture—but I also enjoy contributing to frontend features that make the final product user-friendly. I like being involved from start to finish, turning ideas into real products that run smoothly for people.`,
    PART_2: `For me, building good software is about balance. It’s not just about making something work today, but making sure it continues to work well in the future. I enjoy solving tough problems, simplifying complex workflows, and designing data-driven, automation-first systems that are scalable, maintainable, and easy to use. I’m especially interested in large-scale applications and system design, where even small decisions can have a big impact on performance and reliability.`,
    PART_3: ``,
  },

  TIMELINE_DESCRIPTIONS: {
    ENGINEERING: `At the core of every great application is a backend that's thoughtfully built and resilient. 
    I specialize in building that foundation—developing APIs that manage data efficiently, designing scalable database 
    architectures, and ensuring systems remain reliable as they grow. While I thrive behind the scenes, I also contribute 
    to frontend development to bridge the gap and deliver cohesive user experiences. Writing clean, maintainable code is 
    a priority because I believe software should be intuitive to understand and easy to evolve. I enjoy breaking down 
    complex problems and turning them into practical, high-performing solutions. For me, development is about balancing 
    precision and pragmatism to build tools that work—reliably and quietly.`,

    PRODUCT: `Great products begin with a deep understanding of the real problems people face. I enjoy collaborating closely 
    with teams to bridge the gap between user needs and practical solutions we can build. My approach focuses on asking 
    thoughtful questions, prototyping early, and iterating based on feedback. Over time, I've learned that building something 
    truly valuable isn’t just about adding features—it’s about knowing what to leave out to keep things simple and effective.`,

    PROBLEM_SOLVING: `Every bug is a puzzle, every feature is an opportunity to make someone's day better. I approach problems 
    methodically—breaking them down, understanding the root cause, and finding solutions that are sustainable. I actually enjoy 
    debugging sessions and find satisfaction in refactoring messy code into something clean and efficient. Often, the best 
    solution is the simplest one.`,

    FRONTEND_TECH: `The frontend is more than what users see — it’s about ensuring smooth, seamless interaction with backend 
    systems. I develop components that communicate efficiently, manage data effectively, and respond without delay. 
    The goal is to turn complex processes into interfaces that feel natural, intuitive, and reliable. Staying updated 
    with modern frontend tools ensures these systems remain adaptable and maintainable.`,

    BACKEND_DB: `The backend is where the core of an application lives — the place where complex logic, data, and performance 
    come together. I focus on developing APIs that are not only functional but clear and predictable for frontend teams to 
    build upon. I design databases with scalability in mind, ensuring they handle growing demands without compromising 
    reliability. Performance and security aren’t just checkboxes; they’re integral to everything I build, keeping systems 
    strong and dependable over the long term.`,

    DEV_WORKFLOW: `Good tools make good developers great. I focus on setting up development environments that boost 
    productivity and minimize friction. From automated testing to deployment pipelines, investing in robust workflows 
    upfront saves time and ensures more reliable, maintainable systems in the long run.`,

    BEGINNING: `I started my coding journey with C, a structured programming language, and later explored C++, an 
    object-oriented language. Those late nights learning programming fundamentals, struggling with syntax and logic, 
    and the sheer joy of seeing my first working program run—that’s when I knew I found my calling. Every error message 
    was a lesson, and every working feature felt like magic.`,

    BUILDING_REAL: `This is when things got serious. I began building real applications that people could actually use, 
    not just tutorial projects. I learned about databases, APIs, authentication, and all the behind-the-scenes work that 
    makes applications run in the real world. Deployment quickly became an art form, and I discovered that “it works on 
    my machine” is never a valid excuse.`,

    SCALING_ARCH: `As my experience grew, I started thinking beyond individual features to entire systems. I explored 
    microservices, database optimization, caching strategies, and designing systems that scale reliably. 
    I learned the value of planning for growth and balancing it with avoiding premature optimization.`,

    LEARNING_GREAT: `Learning never stops. Every project, bug, and feature teaches me something new, and I continue to explore, 
    experiment, and refine my skills every day.`,

    NOT_CODING: `I’m naturally curious. I enjoy reading about technology trends, watching videos on engineering and software 
    topics, and occasionally attempting to cook something more complex than instant noodles (with mixed results). I also like 
    long walks, where I often find myself thinking about code architecture or that tricky bug I couldn’t fix earlier.`,

    LETS_CONNECT: `I’m always open to interesting conversations—whether about technology, product development, or anything in 
    between. If you want to discuss a project idea, share a challenging problem, or just chat about the latest trends in our 
    field, feel free to reach out. The best collaborations often start with simple conversations.`,
  },
} as const;

export type AppConstantsType = typeof APP_CONSTANTS;
export type FontAwesomeIconsType = typeof FONT_AWESOME_ICONS;
export type ProjectDataType = typeof PROJECT_DATA;
export type SocialLinksDataType = typeof SOCIAL_LINKS_DATA;
export type ContentDataType = typeof CONTENT_DATA;
