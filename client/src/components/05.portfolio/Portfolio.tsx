import styled from "styled-components";
import Inner from "../00.common/Inner.styled";

const Container = styled.section`
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
