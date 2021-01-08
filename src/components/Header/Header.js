import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Icon name="bars" />
      <Link to="/">
        <img className="header__img" src="/assets/images/kants.png" alt="kants logo"/>
      </Link>
      <div className="header__spacer"></div>
      <a href="#" className="header__button__connect">
        Se Connecter
      </a>
    </div>
  );
};

export default Header;
