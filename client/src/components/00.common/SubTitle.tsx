import styled from "styled-components";
const Container = styled.div`
  h2 {
    font-size: ${(props) => props.theme.subjectFontSize_web};
    color: ${(props) => props.theme.subjectColor};
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_mobile};
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_tablet};
    }
  }
`;

function SubTitle({ subtitle }: any) {
  return (
    <Container>
      <h2>{subtitle}</h2>
    </Container>
  );
}

export default SubTitle;
