import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Icon name="bars" />
      <Link to="/">
        <img src="./assets/images/uber-eats.svg" />
      </Link>
      <div className="header__spacer"></div>
      <a href="#" className="header__button__connect">
        Se&nbsp;Connecter
      </a>
    </div>
  );
};

export default Header;
