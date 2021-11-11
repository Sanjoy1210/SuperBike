import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import spinner from '../../../images/loader/SBv4T.gif';

const PrivateRoute = ({ children, ...rest }) => {

  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <img src={spinner} alt="loader" />
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;