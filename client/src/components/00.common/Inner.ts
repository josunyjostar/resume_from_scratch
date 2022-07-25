import styled from "styled-components";

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.containerPaddingLR_web};

  width: ${(props) => props.theme.webWidth};
  border: 2px solid blue;

  @media (max-width: 767px) {
    width: inherit;
    margin: 0;
    padding: 0 ${(props) => props.theme.containerPaddingLR_mobile};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: inherit;
    padding: 0 ${(props) => props.theme.containerPaddingLR_tablet};
  }
`;

export default Inner;
