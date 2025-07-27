export interface Project {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}

export interface AboutMe {
  part1: string;
  part2: string;
}

export interface GlobalState {
  cvLink: string;
  aboutMe: AboutMe;
  projects: Project[];
}
