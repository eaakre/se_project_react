import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute({ children, loggedIn, ...props }) {
  const value = React.useContext(CurrentUserContext);
  return (
    <Route {...props}>
      {value.loggedIn ? children : <Redirect to={"/"} />}
    </Route>
  );
}

export default ProtectedRoute;
