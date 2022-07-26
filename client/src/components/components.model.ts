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

export interface EducationProps {
  leftSection: { period: string };
  rightSection: { organization: string; subtitle: string | null; desc: { main: string; sub: string | string[] | null }[] };
}
