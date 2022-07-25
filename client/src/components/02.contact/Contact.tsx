import styled from "styled-components";
import Inner from "../00.common/Inner";

const Container = styled.div`
  border: 1px solid red;

  height: 10vh;
`;

function Contact() {
  return (
    <Container>
      <Inner>
        <h2>Contact</h2>
      </Inner>
    </Container>
  );
}

export default Contact;
