import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "./header.css";

const Header = ({ setVisible, visible }) => {
  return (
    <>
      <div className="header">
        <Button circular icon="bars" onClick={(e) => setVisible(true)} />
        <Link to="/">
          <img
            className="header__img"
            src="/assets/images/kants.png"
            alt="kants logo"
          />
        </Link>
        <div className="header__spacer"></div>
        <Link to="/login">
          <a href="#" className="header__button__connect">
            Se Connecter
          </a>
        </Link>
      </div>
    </>
  );
};

export default Header;
