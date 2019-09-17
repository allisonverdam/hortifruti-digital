import React from "react";
import Header from "../../components/Header";
import { Container } from "@material-ui/core";

function Wellcome(props) {
  return (
    <>
      <Header {...props} />
      <Container>
        <h1>HOME PAGE</h1>
      </Container>
    </>
  );
}

export default Wellcome;
