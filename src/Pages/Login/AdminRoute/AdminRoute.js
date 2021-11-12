import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import spinner from '../../../images/loader/Spinner.gif';

const AdminRoute = ({ children, ...rest }) => {

  const { admin, user, isLoading } = useAuth();

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
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;