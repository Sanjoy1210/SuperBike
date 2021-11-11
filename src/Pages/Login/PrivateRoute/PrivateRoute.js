import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import spinner from '../../../images/loader/Spinner.gif';

const PrivateRoute = ({ children, ...rest }) => {

  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="position-absolute top-50 start-50">
        <img src={spinner} alt="loader" />
      </div>
    )
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