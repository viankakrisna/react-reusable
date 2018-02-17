import React from 'react';
import connect from './connect';
const Route = connect(
  ({ history, exact, pathname, children = null }) =>
    (exact ? (
      history.location.pathname === pathname
    ) : (
        history.location.pathname.match(new RegExp(pathname))
      )) ? (
        <React.Fragment>{children}</React.Fragment>
      ) : null
);

Route.displayName = "Route";
export default Route;