import { Header, Contact, Introduction, Skills, Portfolio, Career, Education } from "../components";
import { HeaderProps } from "../components/components.model";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.resumeBgColor};
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  /* border: 3px solid yellow; */

  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`;

interface Data {
  data: Map<string, object>;
}

function Resume({ data }: Data) {
  return (
    <Container>
      <Header data={data.get("header")! as HeaderProps} />
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
