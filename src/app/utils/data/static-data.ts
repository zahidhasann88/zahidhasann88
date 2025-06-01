import { GlobalState, Project } from '../models/global-state.model';

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink: 'https://drive.google.com/file/d/1mbhr8CXB8KrRrDGIBt11mLUlkcgGBYlS/view?usp=sharing',
  aboutMe: {
    part1: `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`,
    part2: `Currently, my focus is on web applications and infrastructure, with a background interest in cloud technologies and distributed systems. 
            I’m passionate about finding creative solutions to complex challenges and building tools that empower others to achieve more.`,
    part3: `Welcome to my own little corner of the web, where I share <a [routerLink]="['/blog']" class="inline-link">notes</a> and resources on topics that interest me. 
            I spend my free time building new <a [routerLink]="['/projects']" class="inline-link">things</a> and capturing in time
            <a [routerLink]="['/photos']" class="inline-link">moments</a>. For a closer look at my career journey, 
            <a [href]="cvLink" target="_blank" rel="noopener noreferrer" class="inline-link">check out my CV</a>. 
            And if something's on your mind, <a href="mailto:zahidhasann67@gmail.com" class="inline-link">drop me a line</a>!`,
  },
} as const;

export const PROJECTS: ReadonlyArray<Readonly<Project>> = [
] as const;