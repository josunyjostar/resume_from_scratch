import styled from 'styled-components';
import IMAGE from './hwasun.jpg';
import LOGO from './logo.svg';

const Container = styled.div`
  h1 {
    color: orange;
  }
`;

export const App = () => {
  return (
    <Container>
      <h1>
        React TypeScript {process.env.NODE_ENV}
        {` ${process.env.name}`}
      </h1>
      <img src={IMAGE} alt="" width="300" height="200"></img>
      <img src={LOGO} alt="" width="300" height="200"></img>
    </Container>
  );
};
