import styled from "styled-components";
import Inner from "../00.common/Inner";

const Container = styled.div`
  border: 1px solid red;
  h1 {
    font-size: 35px;
    font-weight: bold;
  }
`;

function Header() {
  return (
    <Container>
      <Inner>
        <h1>프론트엔드 개발자 박제영</h1>
      </Inner>
    </Container>
  );
}

export default Header;
