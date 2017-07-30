import history from './history';
const matched = pathname => history.location.pathname === pathname;
export default ({ pathname, children }) =>
  (matched(pathname) ? children : null);
