import styled from "styled-components";
const Container = styled.section`
  h2 {
    font-size: ${(props) => props.theme.subjectFontSize_web};
    color: ${(props) => props.theme.subjectColor};
    font-weight: bold;
  }

  .part {
    margin-top: 10px;
    .category {
      font-weight: bold;
      background-color: #eee;
    }
  }

  p {
    margin-top: 8px;
    margin-bottom: 0;
    span {
      font-size: 13px;
      color: tomato;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => props.theme.contentfontSize_mobile};
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_mobile};
    }

    .part {
      margin-top: 6px;
    }

    p {
      margin-top: 5px;
      span {
        font-size: 10px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => props.theme.contentfontSize_tablet};
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_tablet};
    }

    .part {
      margin-top: 8px;
    }

    p {
      margin-top: 8px;
      margin-bottom: 0;
      span {
        font-size: 13px;
        color: tomato;
      }
    }
  }
`;

export default Container;
