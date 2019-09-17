import React, { useContext } from "react";
import Header from "../../components/Header";
import AuthContext from "../../contexts/AuthContext";
import { Container } from "@material-ui/core";

function Home(props) {
  const authContext = useContext(AuthContext);

  console.log({ authContext });

  return (
    <>
      <Header {...props} />
      <Container>
        <h1>AREA LOGADA</h1>
      </Container>
    </>
  );
}

export default Home;
