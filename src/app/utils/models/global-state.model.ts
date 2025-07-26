export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
}

export interface AboutMe {
  part1: string;
  part2: string;
  part3: string;
}

export interface GlobalState {
  cvLink: string;
  aboutMe: AboutMe;
  projects: Project[];
}
