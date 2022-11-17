import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MessageBar from "./components/MessageBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Logon from "./components/Logon";
import Register from "./components/Register";
import Logout from "./components/Logout";
import History from "./components/History";
import PlaceOrder from "./components/PlaceOrder";
/* Function Header
 *
 * function for the main application. This also
 * manages routing.
 * @author Peter Walton
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <MessageBar />
        <Switch>
          <Route path="/order">
            <Main />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Logon />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/place-order">
            <PlaceOrder />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
