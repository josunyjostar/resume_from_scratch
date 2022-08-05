import { Education, Portfolio } from "../components/components.model";
const header = {
  name: "박제영",
  desc: "프론트엔드 개발자",
};

const contact = {
  mobile: "010-3476-4438",
  email: "parkjeyoung85@gmail.com",
  github: "https://github.com/josunyjostar",
  blog: "https://velog.io/@dkfmwpsxm",
};

const intro1: string =
  "SPA 웹앱 팀 프로젝트를 2번 진행해 보았고 간단한 개인 프로젝트도 2번 진행해보았습니다. 팀 프로젝트에서 팀장의 역할을 맡았고 두 번째 프로젝트는 git-hub kanban 사용해 일정 내 마무리를 지을 수 있도록 책임을 다했습니다. ";
const intro3: string = "c++ 1년 6개월 학습 / c++ 1년 직장생활 / 웹 개발 공부 10개월 되었습니다. 개발 공부하는 것에 보람을 느끼며 자다가도 알고리즘이 떠올라서 일어나 알고리즘 공부한 적도 있습니다.";
const intro4: string = "팀에 들어갔을 때 믿고서 같이 일할 수 있는 동료인가? 라는 주제에 대해서 중요하게 생각하기 때문에 믿을 수 있는 동료가 되고자 꾸준히 공부하고 있습니다.";
const intro2: string = "화면에 생각대로 렌더링하는 것을 좋아하고 figma나 zeplin 같은 기획문서를 받는다면 기획 문서와 똑같이 그릴 수 있습니다.";

const introduction = {
  data: [intro1, intro2, intro3, intro4],
};

const frontend: string[] = ["Typescript", "Javascript", "React", "Redux", "Styled-Components", "HTML/CSS", "Webpack/Babel", "Zustand"];
const backend: string[] = ["Node.js", "Express.js", "Jwt", "Mysql"];
const deploy: string[] = ["AWS EC2", "S3", "RDS", "CloudFront", "Route53"];
const etc: string[] = ["Git", "VS Code"];
const techStack: Array<string[]> = [frontend, backend, deploy, etc];
const skills = {
  data: techStack,
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
          "한국에서 제공하는 서비스의 일부를 merge하고 패치로 만들어서 일본에 전달하고 생겨난 이슈에 대한 버그를 수정하는 역할을 하였습니다.",
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

const projectQuiz: Portfolio = {
  leftSection: {
    period: "22.07.30 - 22.08.04",
    institution: "개인 프로젝트",
    order: null,
    setup: "1인",
  },
  rightSection: {
    title: "Simple Quiz",
    summary: "채용 과정 중 기업에서 받은 과제로 간단한 퀴즈 웹앱입니다.",
    url: "https://quiz-edu.shop/",
    github: "https://github.com/josunyjostar/quiz",
    prototype: "https://github.com/josunyjostar/quiz/wiki",
    role: "[개인 프로젝트]",
    skills: "react, styled-components, typescript, zustand, react-chartjs-2, @testing-library/react",
    part: null,
    desc: null,
    learned: [
      "이벤트 델리게이션을 프로젝트에 적용할 수 있게 되었음 (이벤트 버블링 막기도 적극적으로 활용)",
      "typescript의 타입가드, 타입 캐스팅을 적극적으로 활용하게 되었음",
      "figma 같은 기획서 없이 시작하다보니 html 태그가 누더기처럼 붙게되어 갈수록 레이아웃 잡는게 힘들어진다는 걸 알게됨",
      "@testing-library/react를 사용하여 단위 테스트 개발을 할 수 있게 됨",
      "브라우저 렌더링 파이브라인의 이해도가 높아져서 css에서 지양해야 할 속성과 지향해야 할 속성을 알게 됨",
    ],
  },
};

const project1: Portfolio = {
  leftSection: {
    period: "2022.07 - 2022.07",
    institution: "개인 프로젝트",
    order: null,
    setup: "1인",
  },
  rightSection: {
    title: "Resume without CRA",
    summary: "개발 환경 설정 CRA가 아닌 직접 설정하여 (typescript, babel, webpack, eslint, prettier, react) 해당 환경으로 작성한 이력서의 웹페이지 버전(반응형 웹앱)",
    url: "https://resume-without-cra.shop/",
    github: "https://github.com/josunyjostar/resume_from_scratch",
    prototype: "https://www.notion.so/a3fe7c6336104de9a711e94c74d3d810",
    role: "[개인 프로젝트]",
    skills: "react, styled-components, typescript, webpack, babel, eslint, prettier",
    part: null,
    desc: null,
    learned: [
      "Css의 flex 속성에 이해도가 높아지고 반응형 웹앱을 만드는 데 숙련이 되었음",
      "wire-frame의 중요성을 알게됨 (기획단계에서의 figma등을 이용한 wire-frame을 가르킴)",
      "babel, typescript, webpack, Lint, prettier 설정을 필요에 따라 설정할 수 있게 되었음 (decorator 적용하기위한 babel,tsconfig 설정)",
      "알고있는 typescript 문법을(generic, interface, decorator등 ) 프로젝트에 적용함",
      "styled-components의 잘 안쓰던 기능을 적극적으로 재활용함(상속,컴포넌트 재사용)",
      "복잡한 객체를 다룰 때 typescript interface의 유용성을 알게됨",
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
    summary: "식물에 주는 영양제 , 물, 분갈이 날짜를 관리하고 사진을 찍어 일지를 작성해 다른 사람들과 공유할 수 있는 웹앱이며 mobile-first로 진행했습니다.",
    url: "https://budbuddy.click/",
    github: "https://github.com/codestates/budbuddy",
    prototype: "https://app.moqups.com/bvuGdqxY3AbobvwrHNKNJZIGfAkDbcW0/view/page/ad64222d5",
    role: "[팀장,프론트엔드]",
    skills: "react, zustand, styled-components, jwt",
    part: "프로젝트에서 맡은 부분 (프론트엔드 기여도 70% 백엔드 기여도 10%)",
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
      "css - display 속성 inline, inline-block, block의 차이점을 알고 작성할 수 있게 되었음",
      "함수형 컴포넌트를 사용하는 장점 중 하나가 custom hook 사용이라는걸 알게되고 타인이 만든 custom hook 몇 가지를 사용함",
      "프로젝트 중반부터 컴포넌트부터 만들고 그 컴포넌트를 조합해서 페이지를 작성하는 것이 더 프로젝트 관리 및 페이지 개발에 편리하다는걸 알게됨",
      "백엔드 개발자분이 API 명세를 PR에 상세 작성 및 postman으로 예제를 달아주셔서 직접 물어보기전에 문서부터 찾게되어 협업에서 문서 작성의 중요성을 알게됨",
    ],
  },
};

const project3: Portfolio = {
  leftSection: {
    period: "2022.02 - 2022.02",
    institution: "코드스테이츠",
    order: "퍼스트 프로젝트",
    setup: "(4인/4주)",
  },
  rightSection: {
    title: "LolInfo",
    summary: " 롤 게임 전적을 검색하여 볼 수 있고 그 데이터를 그래프로 도식화해 직관적인 해석을 하게 만든 웹앱",
    url: "https://lolinfo.shop/",
    github: "https://github.com/codestates/lolinfo",
    prototype: "https://www.figma.com/file/eQrIx5TRVOLI1ZuBDph8rO/36%EA%B8%B0-2%EC%A3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0%3A1",
    role: "[팀장,프론트엔드]",
    skills: "react, redux, redux-thunk, styled-components, d3.js",
    part: "프로젝트에서 맡은 부분 (프론트엔드 기여도 30% 백엔드 기여도 10%)",
    desc: [
      {
        main: "전적페이지",
        sub: null,
      },
      {
        main: "승률 원형 그래프 / 가로 세로 막대그래프 (d3.js사용)",
        sub: null,
      },
      {
        main: "Aws이용한 https 배포",
        sub: null,
      },
    ],
    learned: [
      "도메인 발급부터 시작하여 AWS의 자원(EC2, S3, RDS, CloudFront, Route53등)들을 연결하며 내가 연결한 AWS의 아키텍쳐를 그림으로 그릴 수 있게 됨",
      "D3.js의 기본적인 사용법을 알게됨",
      "useState만으로의 상태관리의 불편한 점들을 느껴 Redux를 사용하여 상태관리를 한 곳에서 처리 및 thunk를 사용한 비동기 처리도 할 수 있게 됨 (persist도 적용)",
      "팀원들 일정관리에 실패하여 팀장으로서 일정관리의 어려움을 알게 됨",
    ],
  },
};

const portfolio = {
  data: [projectQuiz, project1, project2, project3],
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
