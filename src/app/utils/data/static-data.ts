import { GlobalState } from '../models/global-state.model';

export const GLOBAL_STATE: Readonly<GlobalState> = {
  cvLink:
    'https://drive.google.com/file/d/1Mn3h-lyylnh18ELnqAV7RH-PHjlsK84W/view?usp=sharing',
  aboutMe: {
    part1: `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`,
    part2: `Currently, my focus is on web applications and infrastructure, with a background interest in cloud technologies and distributed systems. 
            I’m passionate about finding creative solutions to complex challenges and building tools that empower others to achieve more.`,
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
};
