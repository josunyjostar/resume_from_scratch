import { Education, Portfolio } from "../components/components.model";
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

const edu1: Education = {
  leftSection: { period: "2022.10 - 2022.04" },
  rightSection: {
    organization: "코드스테이츠 (Code States)",
    subtitle: "Advanced software engineering, Immersive program (36기)",
    desc: [
      {
        main: "Javascript 기반으로 풀스택 과정 학습",
        sub: null,
      },
      {
        main: "Html, Css, Styled-components, Dom, Linux, React, Git, Redux, NodeJs(http/https), Mysql, Docker",
        sub: null,
      },
      {
        main: "인증보안 기초(세션/토큰), AWS",
        sub: null,
      },
      {
        main: "초급 알고리즘 / 자료구조",
        sub: null,
      },
      {
        main: "협업 프로젝트 2회 진행",
        sub: null,
      },
    ],
  },
};
const edu2: Education = {
  leftSection: { period: "2016.06 - 2017.06" },
  rightSection: {
    organization: "쥬신게임아카데미",
    subtitle: "c++ 게임 클라이언트 개발자 지망 과정",
    desc: [
      {
        main: "C언어 기초 / C++언어 기초 및 활용 / WindowsAPI",
        sub: null,
      },
      {
        main: "자료구조 / 디자인패턴",
        sub: null,
      },
      {
        main: "MFC / Software Rendering With DirectX SDK9 / Shader",
        sub: null,
      },
      {
        main: "개인 프로젝트 1회 / 기여도 100%",
        sub: { desc: ["- MOMODORA : 2D 횡스크롤 액션게임 (1인/4주)", "- [유튜브 링크] "], url: "https://www.youtube.com/watch?v=2PpYRbAbWbY" },
      },
      {
        main: "팀 프로젝트 1회 / 기여도 25%",
        sub: { desc: ["- 프리니 큐브 : 3D 그림자 퍼즐 게임 (4인/4주)", "- [유튜브 링크] "], url: "https://www.youtube.com/watch?v=5TGV9zOoZu8" },
      },
    ],
  },
};
const edu3: Education = {
  leftSection: { period: "2015.04 - 2015.07" },
  rightSection: {
    organization: "삼성 SDS 멀티캠퍼스",
    subtitle: null,
    desc: [
      {
        main: "C# / 유니티 엔진 과정",
        sub: null,
      },
      {
        main: "팀 프로젝트 1회",
        sub: null,
      },
    ],
  },
};
const edu4: Education = {
  leftSection: { period: "2005.03 - 2012.02" },
  rightSection: {
    organization: "청주대학교",
    subtitle: null,
    desc: [
      {
        main: "중어중문과 (졸업) 총평점 3.78/4.5",
        sub: null,
      },
    ],
  },
};

const education = {
  data: [edu1, edu2, edu3, edu4],
};

const project1: Portfolio = {
  leftSection: {
    period: "2022.07 - 2022.07",
    institution: "개인 프로젝트",
    order: null,
    setup: "1인",
  },
  rightSection: {
    title: " Resume without CRA",
    summary: "면접 보며 느낀 신입 개발자에게 필요한 요구 스택을 학습하고 해당 내용을 토대로 이력서를 만들어 웹페이지로 제작",
    detail: "개발 환경 설정 CRA가 아닌 직접 설정하여 (typescript, babel, webpack, ESLint, prettier, react) 빌드파이프 라인을 이해하고 해당 환경으로 작성한 이력서의 웹페이지 버전",
    url: "준비중",
    github: "https://github.com/josunyjostar/resume_from_scratch",
    prototype: "https://www.notion.so/a3fe7c6336104de9a711e94c74d3d810",
    role: "[개인 프로젝트]",
    skills: "React, Styled-components, Typescript, Webpack, babel, ESLint, Prettier",
    part: null,
    desc: null,
    learned: [
      "Css의 flex 속성에 이해도가 높아지고 반응형 웹앱을 만드는 데 숙련이 되었음",
      "babel, typescript, webpack, Lint, prettier 설정을 필요에 따라 설정할 수 있게 되었음 (decorator 적용하기위한 babel,tsconfig 설정)",
      "알고있는 typescript 문법을(generic, interface, decorator등 ) 프로젝트에 적용함",
      "styled-components의 잘 안쓰던 기능을 적극적으로 재활용함(상속,컴포넌트 재사용)",
    ],
  },
};

const project2: Portfolio = {
  leftSection: {
    period: "2022.03 - 2022.04",
    institution: "코드스테이츠",
    order: "파이널 프로젝트",
    setup: "(3인/4주)",
  },
  rightSection: {
    title: "Budbuddy",
    summary: "반려식물 관리 웹앱",
    detail:
      "팀원 중 식물을 키우는 분이 있어 시작하게 되었고 식물에 주는 영양제 , 물, 분갈이 날짜를 관리하고 사진을 찍어 일지를 작성해 다른 사람들과 공유할 수 있는 웹앱이며 mobile-first로 진행했습니다.",
    url: "https://budbuddy.click/",
    github: "https://github.com/codestates/budbuddy",
    prototype: "https://app.moqups.com/bvuGdqxY3AbobvwrHNKNJZIGfAkDbcW0/view/page/ad64222d5",
    role: "[팀장,프론트엔드]",
    skills: "React, Zustand, Styled-Components, Cookie, Jwt",
    part: "프로젝트에서 맡은 부분 (프론트엔드 기여도 90% 백엔드 기여도 5%)",
    desc: [
      {
        main: "UI 컴포넌트 (DatePicker / 이미지 슬라이드 / 모든 예외처리 모달 / 네비게이션바 / 슬라이드바)",
        sub: "- 라이브러리를 사용하지 않고 직접 구현",
      },
      {
        main: "게시판 CRUD, 댓글 및 대댓글 구현, 게시판 검색기능",
        sub: null,
      },
      {
        main: "홈 / 로그인 / 회원가입 / 일지작성 / 일지목록 / 스토리 / 마이페이지를 담당",
        sub: "- 회원 가입 / 로그인은 백엔드 포함",
      },
    ],
    learned: [
      "useInterval로 state를 관리할 때 문제되는 점을 해결하게 됨 (useRef와 useEffect에 대한 이해도가 높아짐)",
      "jwt를 사용한 로그인을 구현하는 방법을 알게되었음 (프로젝트 당시에는 token을 cookie로 전송함)",
      "css - display 속성 inline, inline-block, block의 차이점을 알고 작성할 수 있게 되었음",
      "redux가 불편해서 zustand 라이브러리 사용을 하게되었고 zustand 를 사용한 상태관리에 익숙해짐 (persist도 적용)",
      "함수형 컴포넌트를 사용하는 장점 중 하나가 custom hook 사용이라는걸 알게되고 타인이 만든 custom hook 몇 가지를 사용함",
      "프로젝트 중반부터 컴포넌트부터 만들고 그 컴포넌트를 조합해서 페이지를 작성하는 것이 더 프로젝트 관리 및 페이지 개발에 편리하다는걸 알게됨",
      "html과 js를 사용해서 이미지 파일을 불러오고 브라우저에 렌더링하는 방법을 알게됨",
      "백엔드 개발자분이 API 명세를 PR에 상세 작성 및 postman으로 예제를 달아주셔서 직접 물어보기전에 문서부터 찾게되어 협업에서 문서 작성의 중요성을 알게됨",
    ],
  },
};

const portfolio = {
  data: [project1, project2],
};

const data = new Map<string, object>();
data.set("header", header);
data.set("contact", contact);
data.set("introduction", introduction);
data.set("skills", skills);
data.set("career", career);
data.set("education", education);
data.set("portfolio", portfolio);

export default data;
