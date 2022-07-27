export interface HeaderProps {
  name: string;
  desc: string;
}

export interface ContactProps {
  mobile: string;
  email: string;
  github: string;
  github_desc: string;
  blog: string;
}
export interface IntroProps {
  data: string[];
}

export interface SkillsProps {
  data: Array<string[]>;
  parenthesis: string;
}

interface Career {
  leftSection: { period: string };
  rightSection: { name: string; team: string; desc: string[] };
}

export interface CareerProps {
  data: Array<Career>;
}

export interface Education {
  leftSection: { period: string };
  rightSection: { organization: string; subtitle: string | null; desc: { main: string; sub?: { desc: string[]; url?: string } | null }[] };
}

export interface EducationProps {
  data: Array<Education>;
}

export interface Portfolio {
  leftSection: { period: string; institution?: string; order?: string | null; setup: string };
  rightSection: {
    title: string;
    summary: string;
    detail: string;
    url: string;
    github: string;
    prototype: string;
    role?: string;
    skills: string;
    part: string | null;
    desc: { main: string; sub?: string | null }[] | null;
    learned: string[];
  };
}
export interface PortfolioProps {
  data: Array<Portfolio>;
}
