import styled from "styled-components";
import Inner from "../00.common/Inner";

const Container = styled.div`
  border: 1px solid red;

  height: 50vh;
`;

function Portfolio() {
  return (
    <Container>
      <Inner>
        <h2>Portfolio</h2>
      </Inner>
    </Container>
  );
}

export default Portfolio;
