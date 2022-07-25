import styled from "styled-components";

const Inner = styled.div`
  width: ${(props) => props.theme.webWidth};
  margin: auto;
  padding: 0 ${(props) => props.theme.containerPaddingLR};
  /* border: 1px solid blue; */
`;

export default Inner;
