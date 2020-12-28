import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import auth0 from "auth0-js";

const { Provider, Consumer: AuthConsumer } = React.createContext({
  isAuthorizade: false,
});


class AuthProvider extends Component {
  state = { isAuthorizade: false, user:{}};

  
auth0 = new auth0.WebAuth({
    domain: "dev-6otq9rge.eu.auth0.com",
    clientID: "9dgatf8ozY63fd67Rg0OyQMGOIsZ1AUV",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid",
  });

  changeAuthorizade = () => {
    this.auth0.authorize();
  };
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setState({ isAuthorizade: true }, () => {
          this.props.history.push("/private");
        })
        this.auth0.client.userInfo(authResult.accessToken, (err, user) =>{
         this.setState({user})
        });
      } else if (err) {
        console.log(err);
      }
    });
  };


  render()
  
  {
    const { isAuthorizade } = this.state;
    const {user}=this.state
    return (
      <div>
        <Provider
          value={{
            isAuthorizade,
            changeAuthorizade: this.changeAuthorizade,
            handleAuthentication: this.handleAuthentication,
            user
       

          }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}
export function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      return (
        <AuthConsumer>
          {(contextProps) => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </AuthConsumer>
      );
    }
  };
}
const AuthProviderWithRouter = withRouter(AuthProvider);
export { AuthProviderWithRouter as AuthProvider };
