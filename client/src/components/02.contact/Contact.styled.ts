import styled from "styled-components";
const Container = styled.section`
  h2 {
    font-size: ${(props) => props.theme.subjectFontSize_web};
    color: ${(props) => props.theme.subjectColor};
    font-weight: bold;
  }

  ul {
    margin: 0 0;
    padding-left: 25px;
    font-size: ${(props) => props.theme.contentfontSize_web};
    li {
      margin: 5px 0;
    }
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_mobile};
    }
    ul {
      padding-left: 20px;
      font-size: ${(props) => props.theme.contentfontSize_mobile};
      li {
        margin: 5px 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_tablet};
    }
    ul {
      padding-left: 20px;
      font-size: ${(props) => props.theme.contentfontSize_tablet};
      li {
        margin: 5px 0;
      }
    }
  }
`;
export default Container;
