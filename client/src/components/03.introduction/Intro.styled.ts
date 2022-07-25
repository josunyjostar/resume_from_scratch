import styled from "styled-components";
const Container = styled.section`
  h2 {
    font-size: ${(props) => props.theme.subjectFontSize_web};
    color: ${(props) => props.theme.subjectColor};
    font-weight: bold;
  }
  .desc {
    margin: 10px;
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => props.theme.contentfontSize_mobile};
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_mobile};
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => props.theme.contentfontSize_tablet};
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_tablet};
    }
  }
`;

export default Container;
