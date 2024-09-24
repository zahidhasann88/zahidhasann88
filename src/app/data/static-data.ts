import { GalleryImage, GlobalState, Project } from '../models/global-state.model';

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink: 'https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing',
  aboutMe: {
    part1: `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`,
    part2: `Currently, I work as a Software Engineer, focusing on backend development, with a keen interest in cloud technologies. 
            I am skilled in cloud infrastructure provisioning, monitoring and serverless architectures. I enjoy seeking out creative solutions to 
            complex problems and building things that empower others to do the same.`,
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
  {
    id: 1,
    title: 'Code Collab Platform',
    description:
      'A real-time collaborative IDE for remote pair programming and code reviews.',
    technologies: ['React', 'Typescript', 'Node.js', 'Socket.io'],
    imageUrl: '/profile/assets/images/code.png',
    githubUrl: 'https://github.com/zahidhasann88/code-collab',
    liveUrl: 'https://weather-app-demo.com',
    imageWidth: 5952,
    imageHeight: 3968,
  },
] as const;

export const IMAGES: ReadonlyArray<Readonly<GalleryImage>> = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/18684134/pexels-photo-18684134/free-photo-of-birds-flying-over-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Serene Sunset',
    description: 'A beautiful sunset over calm waters.',
    category: 'Nature',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/28374824/pexels-photo-28374824/free-photo-of-ancient-colosseum-architecture-in-rome.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mountain Peak',
    description: 'A majestic mountain peak.',
    category: 'Nature',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/28374824/pexels-photo-28374824/free-photo-of-ancient-colosseum-architecture-in-rome.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mountain Peak',
    description: 'A majestic mountain peak.',
    category: 'Nature',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/28153548/pexels-photo-28153548/free-photo-of-the-sun-shines-through-the-trees-in-this-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Autumn Fores',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/28319931/pexels-photo-28319931/free-photo-of-a-woman-sitting-on-a-tree-branch-with-a-guitar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Urban Nigh',
    description: 'A beautiful image of nature.',
    category: 'Nature',
  },
] as const;