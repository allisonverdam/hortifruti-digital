import React, { useState, useRef } from "react";
import { Redirect, Link } from "react-router-dom";

import { AuthConsumer } from "../../contexts/AuthContext";

import {
  Container,
  LoginCard,
  BoxLogin,
  ButtonLogin,
  ButtonLoginGoogle
} from "./styles";

import URLS from "../../utils/urls";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const btnLoginRef = useRef();

  return (
    <AuthConsumer>
      {({ user, login, loginWithGoogle }) => {
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
                <h1>Login</h1>

                <form>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <input
                    id="password"
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e =>
                      e.keyCode == 13 && btnLoginRef.current.click()
                    }
                  />
                  <ButtonLogin
                    type="button"
                    ref={btnLoginRef}
                    onClick={() => login(email, password)}
                  >
                    LOGAR
                  </ButtonLogin>
                </form>
                <ButtonLoginGoogle onClick={loginWithGoogle}>
                  LOGIN COM GOOGLE
                </ButtonLoginGoogle>
                <Link to={URLS.REGISTER_PAGE}>Registrar</Link>
              </LoginCard>
            </BoxLogin>
          </Container>
        );
      }}
    </AuthConsumer>
  );
};

export default Login;
