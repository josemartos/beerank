import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="pageContainer">
      <UserList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
