import { GlobalState } from '../models/global-state.model';

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink: 'https://drive.google.com/file/d/1Mn3h-lyylnh18ELnqAV7RH-PHjlsK84W/view?usp=sharing',
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
  projects: [
    {
      name: 'media-analyzer',
      description:
        'A Flask API for video and audio analysis using OpenAI Whisper and Hugging Face. Features speech-to-text conversion, content summarization, quality checks, and streaming optimization.',
      url: 'https://github.com/zahidhasann88/audio-analyzer',
      tech: ['Flask', 'AI/ML', 'OpenCV', 'Whisper'],
    },
    {
      name: 'kvstore',
      description:
        'A Redis-like key-value store implementation in Go with CLI interface and TCP server support.',
      url: 'https://github.com/zahidhasann88/kvstore',
      tech: ['Go', 'TCP', 'CLI', 'Redis-like'],
    },
  ],
};
