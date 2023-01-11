import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  const token = useSelector((state) => state.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        // localStorage.getItem('token')
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
