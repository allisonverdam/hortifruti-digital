import React, { useState, useRef } from "react";
import { Redirect, Link } from "react-router-dom";

import { AuthConsumer } from "../../contexts/AuthContext";

import { Container, LoginCard, BoxLogin, ButtonLogin } from "./styles";

import URLS from "../../utils/urls";

const Register = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const btnRegistrarRef = useRef();

  return (
    <AuthConsumer>
      {({ user, register }) => {
        return user != null ? (
          <Redirect
            to={{
              pathname: URLS.HOME_PAGE,
              state: { from: props.location }
            }}
          />
        ) : (
          <Container>
            <BoxLogin>
              <LoginCard>
                <h1>registre-se</h1>

                <form>
                  <input
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e =>
                      e.keyCode == 13 && btnRegistrarRef.current.click()
                    }
                  />
                  <ButtonLogin
                    type="button"
                    ref={btnRegistrarRef}
                    onClick={() => register(email, password, name)}
                  >
                    REGISTRAR
                  </ButtonLogin>
                </form>
                <Link to={URLS.LOGIN_PAGE}>Entrar</Link>
              </LoginCard>
            </BoxLogin>
          </Container>
        );
      }}
    </AuthConsumer>
  );
};

export default Register;
