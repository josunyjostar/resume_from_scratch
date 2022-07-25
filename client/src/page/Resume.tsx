import { Header, Contact, Introduction, Skills, Portfolio, Career, Education } from "../components";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.resumeBgColor};
`;

function Resume() {
  return (
    <Container>
      <Header />
      <Contact />
      <Introduction />
      <Skills />
      <Portfolio />
      <Career />
      <Education />
    </Container>
  );
}

export default Resume;
