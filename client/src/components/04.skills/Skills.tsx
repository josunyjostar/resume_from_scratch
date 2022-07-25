import styled from "styled-components";
import Inner from "../00.common/Inner";

const Container = styled.div`
  border: 1px solid red;

  height: 30vh;
`;

function Skills() {
  return (
    <Container>
      <Inner>
        <h2>Skills</h2>
      </Inner>
    </Container>
  );
}

export default Skills;