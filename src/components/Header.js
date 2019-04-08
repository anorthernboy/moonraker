import React from "react";
import { Link } from "@reach/router";
import "../style/Header.css";

const Header = () => {
  return (
    <div>
      <Link to={`/`} className="header">
        <h1>MOONRAKER</h1>
      </Link>
    </div>
  );
};

export default Header;
