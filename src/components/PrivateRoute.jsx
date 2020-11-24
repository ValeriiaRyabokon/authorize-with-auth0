import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "./Auth";

export const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuthorizade, ...rest }) => (
    <Route
      {...rest}
      render={(routerProps) =>
        isAuthorizade ? (
          <RouteComponent {...routerProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
);
