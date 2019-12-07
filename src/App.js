import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
