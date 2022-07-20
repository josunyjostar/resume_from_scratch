import styled from 'styled-components';
import IMAGE from './hwasun.jpg';

const Container = styled.div`
  h1 {
    color: orange;
  }
`;

export const App = () => {
  return (
    <Container>
      <h1>React TypeScript</h1>
      <img src={IMAGE} alt="" width="300" height="200"></img>
    </Container>
  );
};
