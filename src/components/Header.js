import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="pageContainer">
        <Link to="/">Super Project</Link>
      </div>
    </header>
  );
};

export default Header;
