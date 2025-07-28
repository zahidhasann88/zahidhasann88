import { GlobalState } from '../models/global-state.model';
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

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink:
    'https://drive.google.com/file/d/1Mn3h-lyylnh18ELnqAV7RH-PHjlsK84W/view?usp=sharing',

  profile: {
    name: 'Zahid Hasan',
    title: 'Full-Stack Engineer',
    greeting: "👋 Hello, I'm Zahid!",
    tagline: 'Full-Stack Engineer & Building Things for Internet',
  },

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/zahidhasann88',
      icon: faGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/zahidhasann',
      icon: faLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/zahidhasann15',
      icon: faXTwitter,
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/12301102/zahid-hasan',
      icon: faStackOverflow,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@jahidhasann67',
      icon: faMedium,
    },
    {
      name: 'Email',
      url: 'mailto:zahidhasann67@gmail.com',
      icon: faEnvelope,
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/u/zahidhasann67/',
      icon: faCode,
    },
  ],

  aboutMe: {
    part1: `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`,
    part2: `Currently, my focus is on web applications and infrastructure, with a background interest in cloud technologies and distributed systems. 
            I'm passionate about finding creative solutions to complex challenges and building tools that empower others to achieve more.`,
    part3: ` Welcome to my web corner where I share my journey in software development 
            and explore new technologies that keep me curious and motivated.`,
    timelineSections: [
      {
        // What I Do Section
        items: [
          {
            title: 'Engineering',
            description: `At the core of every great application is a backend that's thoughtfully built and resilient. 
            I specialize in building that foundation—developing APIs that manage data efficiently, designing scalable 
            database architectures, and ensuring systems remain reliable as they grow. While I thrive behind the scenes, 
            I also step into frontend development to bridge the gap and deliver cohesive user experiences. Writing clean, 
            maintainable code is a priority because I believe software should be intuitive to understand and easy to evolve. 
            I enjoy breaking down complex problems and turning them into practical, high-performing solutions. For me, 
            engineering is about balancing precision and pragmatism to build tools that work — reliably and quietly.`,
            link: {
              url: 'https://github.com/zahidhasann88',
              text: 'View GitHub',
              icon: faGithub,
            },
          },
          {
            title: 'Product',
            description: `Great products begin with a deep understanding of the real problems people face. I enjoy collaborating 
            closely with teams to bridge the gap between user needs and practical solutions we can build. My approach focuses 
            on asking thoughtful questions, prototyping early, and iterating based on feedback. Over time, I've learned that 
            building something truly valuable isn't just about adding features — it's about knowing what to leave out to keep 
            things simple and effective.`,
            link: {
              url: 'mailto:zahidhasann67@gmail.com',
              text: 'Get In Touch',
              icon: faEnvelope,
            },
          },
          {
            title: 'Problem Solving',
            description: `Every bug is a puzzle, every feature is an opportunity to make someone's day better. I approach problems 
              methodically—breaking them down, understanding the root cause, and finding solutions that are sustainable. 
              I'm that person who actually enjoys debugging sessions and finds satisfaction in refactoring messy code 
              into something beautiful. Sometimes the best solution is the simplest one.`,
            link: {
              url: '#',
              text: 'My Approach',
              icon: faBrain,
            },
          },
        ],
      },
      {
        title: 'Skills & Tools.',
        items: [
          {
            title: 'Frontend Technologies',
            description: `More than just what users see, the frontend is about making sure everything runs smoothly behind the 
            scenes — syncing perfectly with backend systems and delivering a seamless, dependable experience. 
            Crafting components that communicate well, manage data efficiently, and respond without delay is essential. 
            The goal is to simplify complex processes into interfaces that feel natural and reliable. Keeping up with the 
            latest frontend tools helps keep these systems strong and adaptable.`,
            dateLabel: {
              text: 'Integration First',
              icon: faCode,
            },
            techTags: [
              'Angular',
              'React',
              'TypeScript',
              'SCSS',
              'Tailwind',
              'RxJS',
            ],
          },
          {
            title: 'Backend & Database',
            description: `Backends are where the core of an application lives — the place where complex logic, data, and 
            performance come together. My focus is on crafting APIs that don't just work, but feel clear and predictable for 
            frontend teams to build upon. I design databases with growth in mind, so they can handle increasing demands without 
            breaking a sweat. Performance and security aren't just boxes to check; they're woven into the fabric of everything 
            I build, ensuring the system stays strong and reliable long-term.`,
            dateLabel: {
              text: 'Server Side',
              icon: faTools,
            },
            techTags: [
              'Golang',
              'Node.js',
              '.NET Core',
              'PostgreSQL',
              'MySQL',
              'Redis',
              'Docker',
            ],
          },
          {
            title: 'Development Workflow',
            description: `Good tools make good developers great. I'm passionate about setting up development environments 
              that boost productivity and reduce friction. From automated testing to deployment pipelines, I believe 
              in investing time upfront to save hours later.`,
            dateLabel: {
              text: 'DevOps',
              icon: faRocket,
            },
            techTags: [
              'Git',
              'GitHub Actions',
              'AWS',
              'Jenkins',
              'Jest',
              'Mocha',
            ],
          },
        ],
      },
      {
        title: 'My Journey.',
        items: [
          {
            title: 'The Beginning: First Hello World',
            description: `Started my coding journey with a simple HTML page and thought I was a wizard when I made text change colors. 
              Those late nights learning JavaScript fundamentals, struggling with CSS layouts, and the pure joy of seeing 
              my first dynamic web page work—that's when I knew I found my calling. Every error message was a lesson, 
              and every working feature felt like magic.`,
            dateLabel: {
              text: '2017-2018',
              icon: faCalendar,
            },
          },
          {
            title: 'Building Real Things',
            description: `This is when things got serious. Started building actual applications that people could use, not just 
              tutorial projects. Learned about databases, APIs, authentication, and all the "boring" stuff that makes 
              applications actually work in the real world. Also discovered that deployment is an art form and that 
              "it works on my machine" is not a valid argument.`,
            dateLabel: {
              text: '2019-2021',
              icon: faCalendar,
            },
          },
          {
            title: 'Scaling & Architecture',
            description: `Started thinking beyond individual features to entire systems. Learned about microservices, database 
              optimization, caching strategies, and how to design systems that don't fall over when more than 10 people 
              use them. Discovered that premature optimization is real, but so is the pain of rebuilding everything 
              when you didn't plan for growth.`,
            dateLabel: {
              text: '2022-2024',
              icon: faCalendar,
            },
          },
          {
            title: 'Learning Something Great 😉',
            description: `We continue learning everyday.`,
            dateLabel: {
              text: 'Currently',
              icon: faCalendar,
            },
          },
        ],
      },
      {
        title: 'Beyond the Code.',
        items: [
          {
            title: "When I'm Not Coding",
            description: `I'm a curious person by nature. I love reading about technology trends, watching YouTube videos about 
              random engineering topics, and occasionally attempting to cook something more complex than instant noodles 
              (with mixed results). I also enjoy long walks where I inevitably end up thinking about code architecture 
              or that bug I couldn't fix earlier.`,
            dateLabel: {
              text: 'Interests',
              icon: faHeart,
            },
          },
          {
            title: "Let's Connect",
            description: `I'm always up for interesting conversations about technology, product development, or just about anything 
              really. Whether you want to discuss a project idea, share a cool technical challenge, or just chat about 
              the latest developments in our field, feel free to reach out. The best collaborations often start with 
              simple conversations.`,
            dateLabel: {
              text: 'Coffee Chat?',
              icon: faCoffee,
            },
          },
        ],
      },
    ],
  },

  projects: [
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
  ],

  icons: {
    faArrowLeft,
    faArrowRightLong,
    faGithub,
    faLinkedin,
    faTwitter: faXTwitter,
    faXTwitter,
    faStackOverflow,
    faMedium,
    faEnvelope,
    faBrain,
    faCalendar,
    faHeart,
    faLightbulb,
    faCoffee,
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
  },
};
