import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthProvider } from "./components/Auth/index";
import { PrivateRoute } from "./components/PrivateRoute";
import Public from "./components/Public";
import Private from "./components/Private";
import Login from "./components/Login";
import Callback from "./components/Callback/index";
import Header from "./components/Header";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
          <PrivateRoute path="/private" component={Private} />
          <Redirect to="/public" />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
