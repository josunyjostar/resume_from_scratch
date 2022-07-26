import styled from "styled-components";
const Container = styled.section`
  ul {
    margin: 0 0;
    padding-left: 25px;
    font-size: ${(props) => props.theme.contentfontSize_web};
    li {
      margin: 5px 0;
    }
  }

  @media screen and (max-width: 767px) {
    ul {
      padding-left: 20px;
      font-size: ${(props) => props.theme.contentfontSize_mobile};
      li {
        margin: 5px 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
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
