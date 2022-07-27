import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Resume from "./page/Resume";
import data from "./resources/resume";

const RootLayout = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  /* position: relative; */
  padding: 10px 0;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
`;

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RootLayout>
        <Resume data={data} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
