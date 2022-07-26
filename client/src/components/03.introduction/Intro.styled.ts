import styled from "styled-components";
const Container = styled.section`
  .desc {
    margin: 10px;
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => props.theme.contentfontSize_mobile};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => props.theme.contentfontSize_tablet};
  }
`;

export default Container;
