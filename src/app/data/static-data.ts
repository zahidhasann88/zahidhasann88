import {
  Blog,
  BlogPost,
  GalleryImage,
  GlobalState,
  Project,
} from '../models/global-state.model';

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink: 'https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing',
  aboutMe: {
    part1: `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`,
    part2: `Currently, I work as a Software Engineer, focusing on developer tooling and infrastructure, with background interest in cloud technologies, 
              distributed systems, and web applications. I enjoy seeking out creative solutions to complex problems and building things that empower others 
              to do the same.`,
    part3: `Welcome to my own little corner of the web, where I share <a href="/blog" class="inline-link">notes</a> and resources on topics that interest me. 
              I spend my free time building new <a href="/projects" class="inline-link">things</a> and capturing in time
              <a href="/photos" class="inline-link">moments</a>. For a closer look at my career journey, 
              <a href="{{cvLink}}" target="_blank" rel="noopener noreferrer" class="inline-link">check out my CV</a>. 
              And if something's on your mind, <a href="mailto:zahidhasann67@gmail.com" class="inline-link">drop me a line</a>!`,
  },
} as const;

export const PROJECTS: ReadonlyArray<Readonly<Project>> = [
  {
    id: 1,
    title: 'Kitchen Car Locator',
    description:
      'A web platform for discovering nearby food trucks, leveraging geolocation and real-time data.',
    technologies: ['Next.js', 'Node.js', 'Nest.js', 'Prisma', 'MySQL', 'AWS'],
    imageUrl: '/profile/assets/images/kitchen_car.png',
    githubUrl: '',
    liveUrl: 'https://idoshokudo.com/',
    imageWidth: 1920,
    imageHeight: 930,
  },
  {
    id: 2,
    title: 'Collaborative Coding Platform',
    description:
      'A real-time collaborative IDE for remote pair programming and code reviews.',
    technologies: ['React', 'Typescript', 'Node.js', 'Socket.io'],
    imageUrl: '/profile/assets/images/cc.jpg',
    githubUrl: 'https://github.com/zahidhasann88/collaborative-coding',
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

export const BLOGS: ReadonlyArray<Readonly<Blog>> = [
  {
    id: 1,
    title: 'Understanding Asynchronous Programming in JavaScript',
    date: '2023-09-15',
    excerpt:
      'In this post, we delve into asynchronous programming concepts in JavaScript, including callbacks, promises, and async/await.',
    tags: ['JavaScript', 'Asynchronous Programming', 'Web Development'],
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'The Power of TypeScript',
    date: '2023-08-30',
    excerpt:
      'Discover how TypeScript can improve your JavaScript development experience.',
    tags: ['TypeScript', 'JavaScript'],
    category: 'Programming Languages',
  },
  {
    id: 3,
    title: 'Angular vs React: A Comprehensive Comparison',
    date: '2023-10-05',
    excerpt:
      'We compare two popular front-end frameworks, Angular and React, to help you choose the right one for your project.',
    tags: ['Angular', 'React', 'Front-end Development'],
    category: 'Frameworks',
  },
] as const;

export const BLOG_POSTS: ReadonlyArray<Readonly<BlogPost>> = [
  {
    id: 1,
    title: 'Mastering Angular: Best Practices for Modern Web Development',
    date: '2024-09-12',
    author: 'John Smith',
    readingTime: 7,
    content: `
        <p>Angular is a powerful framework for building dynamic web applications. Here are some of the best practices to follow.</p>
        <h2>Follow Modular Architecture</h2>
        <p>Organizing your application into modules improves scalability and maintainability.</p>
        <h2>Lazy Loading</h2>
        <p>Lazy loading allows you to load modules only when needed, reducing the initial load time.</p>
      `,
    tags: ['Angular', 'Best Practices', 'Web Development'],
  },
  {
    id: 2,
    title: 'A Deep Dive into TypeScript for JavaScript Developers',
    date: '2024-08-22',
    author: 'Jane Doe',
    readingTime: 5,
    content: `
          <p>TypeScript enhances JavaScript by providing static types. Here’s how TypeScript can help JavaScript developers.</p>
          <h2>Types and Interfaces</h2>
          <p>Adding types and interfaces to your code makes it easier to maintain and reduces bugs.</p>
          <h2>Advanced Type Features</h2>
          <p>TypeScript comes with advanced features such as union types, intersection types, and type inference.</p>
        `,
    tags: ['TypeScript', 'JavaScript', 'Programming Languages'],
  },
  {
    id: 3,
    title: 'The Future of JavaScript: Emerging Trends and Technologies',
    date: '2024-07-15',
    author: 'Sam Johnson',
    readingTime: 6,
    content: `
          <p>JavaScript is constantly evolving. Let’s look at some of the trends that will shape the future of JavaScript.</p>
          <h2>WebAssembly</h2>
          <p>WebAssembly allows running high-performance code alongside JavaScript.</p>
          <h2>Server-side Rendering</h2>
          <p>With server-side rendering, JavaScript frameworks like Next.js can boost performance and SEO.</p>
        `,
    tags: ['JavaScript', 'Web Development', 'Trends'],
  },
] as const;
