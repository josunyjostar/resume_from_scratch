const header = {
  name: "박제영",
  desc: "프론트엔드 개발자",
};

const contact = {
  mobile: "010-3476-4438",
  email: "parkjeyoung85@gmail.com",
  github: "https://github.com/josunyjostar?tab=repositories",
  github_desc: "(*starred만 참고 부탁드립니다.)",
  blog: "https://velog.io/@dkfmwpsxm",
};

const intro1: string =
  "SPA 웹 포트폴리오를 두 번 진행해보았고 팀장의 역할을 맡았습니다. 두 프로젝트 모두 일정 내에 마무리를 지을 수 있도록 책임을 다했습니다. 프론트와 백엔드 모두 흥미를 느끼지만, 프론트엔드에 좀 더 자신감이 있습니다. 특히 UI 컴포넌트 만드는 것을 잘합니다.";
const intro2: string =
  "담당한 업무의 결과물을 다듬는 걸 좋아합니다. 부여된 업무만 마치는 것보다는 어떻게 하면 더 편하게 쓸지 어떻게 하면 같은 팀원들이 이 컴포넌트를 더 쉽게 사용할 수 있을까 하는 능동적인 고민을 하는 것이 본인의 성장에 도움이 된다고 느낍니다.";
const intro3: string =
  "마지막으로 새로운 것을 배움에 있어 즐거움을 느끼고 가능한한 알고서 사용하고자 노력합니다. 게임하다가 알고리즘이 자꾸 떠올라서 게임을끄고 알고리즘 공부한 적도 있습니다. 배울수록 모르는 것이 많아 좌절할 때도 있지만 자주 사용하면서 그 의미를 깨달을 때 성장했다고 느낍니다. 팀에 들어 갔을 때 같이 일할 수 있는 사람인가? 라는 주제에 대해서 중요하게 생각하기 때문에 믿을 수 있는 동료가 되고자 꾸준히 공부하고 있습니다.";

const introduction = {
  data: [intro1, intro2, intro3],
};

const frontend: string[] = ["JavaScript", "React", "Reduc", "Zustand", "Styled-Components", "HTML5", "Css3", "Webpack", "TypeScript", "Babel"];
const backend: string[] = ["Node.js", "Express.js", "Jwt", "Cookie", "Mysql"];
const deploy: string[] = ["AWS EC2", "S3", "RDS", "CloudFront", "Route53"];
const etc: string[] = ["Git", "VS Code"];
const techStack: Array<string[]> = [frontend, backend, deploy, etc];
const skills = {
  data: techStack,
  parenthesis: "상기 단순 기술 나열은 요약 정도로만 봐주시고 자세한 부분은 포트폴리오에서 봐주시면 감사하겠습니다.",
};

const career = {
  data: [
    {
      leftSection: {
        period: "2018.01 - 2019.01",
      },

      rightSection: {
        name: "라이언게임즈",
        team: "클라이언트 프로그래머",
        desc: [
          "소울워커(MORPG 게임)의 일본 라이브 서비스를 담당",
          "한국에서 제공하는 서비스의 일부를 merge하고 패치로 만들어서 일본에 전달하고 생겨난 이슈에 대해 해결해주는 역할을 하였습니다.",
          "사용했던 협업툴은 Jira, mecurial, svn 입니다.",
        ],
      },
    },
  ],
};

const data = new Map<string, object>();
data.set("header", header);
data.set("contact", contact);
data.set("introduction", introduction);
data.set("skills", skills);
data.set("career", career);

export default data;
