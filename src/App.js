import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume  from "./components/resume";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <GlobalStyle />
      <Form></Form>
    </>
  );
};

export default App;
