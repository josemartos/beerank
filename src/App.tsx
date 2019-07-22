import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import UserList from "./components/UserList";

const UserDetails = lazy(() => import("./components/UserDetails"));

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <div className="pageContainer">
            <Router>
              <UserList path="/" />
              <UserDetails path="/userdetails/:id" />
            </Router>
          </div>
        </Suspense>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
