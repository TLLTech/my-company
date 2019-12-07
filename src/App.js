import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
