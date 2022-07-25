import styled from "styled-components";
import Inner from "../00.common/Inner";
import { HeaderProps } from "../components.model";

const Container = styled.div`
  border: 1px solid red;
  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 1px;
      font-weight: bold;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`;

interface Props {
  data: HeaderProps;
}

function Header({ data }: Props) {
  const { name, desc } = data;
  return (
    <Container>
      <Inner>
        <h1>{`${desc} ${name}`}</h1>
      </Inner>
    </Container>
  );
}

export default Header;
