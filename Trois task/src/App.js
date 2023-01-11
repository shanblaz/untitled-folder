import LogIn from "./components/SignIn";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import PrivateRoute from "./router/PrivateRouter";
import ErrorModal from "./components/ErrorModal";

const NotFound = () => <h1>404: Page Not Found</h1>;

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <ErrorModal />
            <Switch>
              <PrivateRoute path="/home" component={withRouter(Home)} />
              <Route exact path="/" component={withRouter(LogIn)} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
