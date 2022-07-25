import styled from "styled-components";
import Inner from "../00.common/Inner.styled";

const Container = styled.div`
  border: 1px solid red;

  height: 50vh;
`;

function Education() {
  return (
    <Container>
      <Inner>
        <h2>Education</h2>
      </Inner>
    </Container>
  );
}

export default Education;
