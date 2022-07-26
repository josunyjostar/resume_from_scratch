import styled from "styled-components";
import Inner from "../00.common/Inner.styled";
import SubTitle from "../00.common/SubTitle";
import Hr from "../00.common/Hr.styled";
import { EducationProps } from "../components.model";

const Container = styled.section`
  border: 1px solid red;

  height: 50vh;
`;

interface Props {
  data: EducationProps;
}

function Education({ data }: Props) {
  return (
    <Container>
      <Inner>
        <SubTitle subtitle="Education" />
        <Hr />
      </Inner>
    </Container>
  );
}

export default Education;
