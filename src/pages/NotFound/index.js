import React from "react";
import Header from "../../components/Header";
import { Container } from "@material-ui/core";

function NotFound(props) {
  return (
    <>
      <Header {...props} />
      <Container>
        <h1>Página não encontrada</h1>
      </Container>
    </>
  );
}

export default NotFound;
