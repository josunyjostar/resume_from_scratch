import styled from "styled-components";
import Inner from "../00.common/Inner";

const Container = styled.div`
  border: 1px solid red;

  height: 30vh;
`;

function Introduction() {
  return (
    <Container>
      <Inner>
        <h2>Introduction</h2>
      </Inner>
    </Container>
  );
}

export default Introduction;
