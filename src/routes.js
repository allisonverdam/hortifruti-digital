import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getFirebase } from "./utils/firebase";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./components/Login";
import Register from "./components/Register";
import Wellcome from "./pages/Wellcome";
import Home from "./pages/Home";

import URLS from "./utils/urls";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <AuthProvider firebase={getFirebase()}>
      <Router>
        <Switch>
          <Route exact path="/" component={props => <Wellcome {...props} />} />
          <Route
            path={URLS.LOGIN_PAGE}
            component={props => <Login {...props} />}
          />
          <Route
            path={URLS.REGISTER_PAGE}
            component={props => <Register {...props} />}
          />
          <Route
            path="/home"
            component={props => <Home {...props} requireAuth={true} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Routes;
