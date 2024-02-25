import React from "react";
// Components
import Main from "./components/section/Main";
// Style
import styled from "styled-components";
// Container Style
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/background.png") no-repeat center center fixed;
  background-size: cover;
  );
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;