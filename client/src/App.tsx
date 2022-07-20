import styled from 'styled-components';

const Container = styled.div`
  h1 {
    color: orange;
  }
`;

export const App = () => {
  return (
    <Container>
      <h1>React TypeScript</h1>
    </Container>
  );
};
