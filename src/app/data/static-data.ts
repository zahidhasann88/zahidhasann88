import { GalleryImage, GlobalState, Project } from '../models/global-state.model';

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink: 'https://drive.google.com/file/d/1_tNTjidYuIascSxhHtlQpDjbxrWfRZN5/view?usp=sharing',
  aboutMe: {
    part1: `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`,
    part2: `Currently, my focus is on web applications and infrastructure, with a strong interest in cloud technologies and distributed systems. 
            I’m passionate about finding creative solutions to complex challenges and building tools that empower others to achieve more.`,
    part3: `Welcome to my own little corner of the web, where I share <a [routerLink]="['/blog']" class="inline-link">notes</a> and resources on topics that interest me. 
            I spend my free time building new <a [routerLink]="['/projects']" class="inline-link">things</a> and capturing in time
            <a [routerLink]="['/photos']" class="inline-link">moments</a>. For a closer look at my career journey, 
            <a [href]="cvLink" target="_blank" rel="noopener noreferrer" class="inline-link">check out my CV</a>. 
            And if something's on your mind, <a href="mailto:zahidhasann67@gmail.com" class="inline-link">drop me a line</a>!`,
  },
} as const;

export const PROJECTS: ReadonlyArray<Readonly<Project>> = [
  // {
  //   id: 1,
  //   title: 'Kitchen Car Locator',
  //   description:
  //     'A web platform for discovering nearby food trucks, leveraging geolocation and real-time data.',
  //   technologies: ['Next.js', 'Node.js', 'Nest.js', 'Prisma', 'MySQL', 'AWS'],
  //   imageUrl: '/assets/images/kitchen_car.png',
  //   githubUrl: '',
  //   liveUrl: 'https://idoshokudo.com/',
  //   imageWidth: 1920,
  //   imageHeight: 930,
  // },
  // {
  //   id: 1,
  //   title: 'Code Collab Platform',
  //   description:
  //     'A real-time collaborative IDE for remote pair programming and code reviews.',
  //   technologies: ['React', 'Typescript', 'Node.js', 'Socket.io'],
  //   imageUrl: '/profile/assets/images/code.png',
  //   githubUrl: 'https://github.com/zahidhasann88/code-collab',
  //   liveUrl: 'https://weather-app-demo.com',
  //   imageWidth: 5952,
  //   imageHeight: 3968,
  // },
] as const;

export const IMAGES: ReadonlyArray<Readonly<GalleryImage>> = [
  {
    id: 1,
    url: 'https://i.ibb.co.com/Mfcgk4J/IMG-6390.jpg',
    title: 'Serene Sunset',
    description: 'A beautiful sunset over calm waters.',
    category: 'Nature',
  },
  {
    id: 2,
    url: 'https://i.ibb.co.com/7K3t4GN/IMG-0692.jpg',
    title: 'Mountain Peak',
    description: 'A majestic mountain peak.',
    category: 'Nature',
  },
  {
    id: 2,
    url: 'https://i.ibb.co.com/yXfw4mG/IMG-1117.jpg',
    title: 'Mountain Peak',
    description: 'A majestic mountain peak.',
    category: 'Nature',
  },
  {
    id: 3,
    url: 'https://i.ibb.co.com/WgjNwk5/IMG-1245.jpg',
    title: 'Autumn Fores',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 4,
    url: 'https://i.ibb.co.com/bgppNf6/IMG-2284.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 5,
    url: 'https://i.ibb.co.com/HC6x1qZ/IMG-3033.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 6,
    url: 'https://i.ibb.co.com/cLLQPtm/IMG-3584.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 7,
    url: 'https://i.ibb.co.com/1mTgxkr/IMG-3984.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 8,
    url: 'https://i.ibb.co.com/HxkG3vK/IMG-3998.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 9,
    url: 'https://i.ibb.co.com/JsjSmVH/IMG-5982.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 10,
    url: 'https://i.ibb.co.com/CPX6tsr/IMG-6258.jpg',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 11,
    url: 'https://i.ibb.co.com/BVwyWqK/IMG-0285.jpg ',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
] as const;