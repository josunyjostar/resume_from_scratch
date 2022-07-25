import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";

const RootLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* position: relative; */
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RootLayout></RootLayout>
    </ThemeProvider>
  );
}

export default App;
