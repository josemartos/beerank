import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import BeerList from "./components/BeerList";

const BeerDetails = lazy(() => import("./components/BeerDetails"));

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <div className="pageContainer">
            <Router>
              <BeerList path="/" />
              <BeerDetails path="/beerdetails/:beerId" />
            </Router>
          </div>
        </Suspense>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
