import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run only once when app compnent load
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        //when user log in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user log out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
