import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { AuthProvider } from "./components/Auth/index";
import {PrivateRoute} from './components/PrivateRoute'
import Public from "./components/Public";
import Private from "./components/Private";
import Login from "./components/Login";
import Callback from './components/Callback/index'

function App() {
  return (
    <>
      <AuthProvider>
        <Typography style={{
          display:'flex',
          justifyContent:' space-evenly', 
          background:'#F0F8FF',
          padding:'30px'
        }}>
          <Link to="/public" style={{
            textDecoration:'none',
            fontSize:30,
            fontWeight:800,
            color:'#727276'
          }}>
            Public
          </Link>
          <Link to="/private" style={{
            textDecoration:'none',
            fontSize:30,
            fontWeight:800,
            color:'#727276'
          }}>
            Private
          </Link>
        </Typography>
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
