import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import './App.css';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import AllProducts from "./Pages/Explore/AllProducts/AllProducts";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/explore">
              <AllProducts />
            </PrivateRoute>
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
