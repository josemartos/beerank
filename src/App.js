import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pageContainer">
        <Router>
          <UserList path="/" />
          <UserDetails path="/userdetails/:id" />
        </Router>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
