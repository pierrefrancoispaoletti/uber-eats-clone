import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

import "./header.css";

const Header = ({ setVisible, visible, user, logout, cart }) => {
  console.log(visible, "header");
  return (
    <>
      <div className="header">
        <Button circular icon="bars" onClick={() => setVisible(true)} />
        <Link to="/">
          <img
            className="header__img"
            src="/assets/images/kants.png"
            alt="kants logo"
          />
        </Link>
        <div className="header__spacer"></div>
        {!user ? (
          <Link to="/login">
            <Button circular color="blue" size="mini" content="Se Connecter" />
          </Link>
        ) : (
          <Button
            onClick={(e) => logout()}
            circular
            color="red"
            content="Deconnexion"
            size="mini"
          />
        )}
        <Link to="/cart">
          <Icon name="cart" size="large" color="green" />
          <small>{cart?.length}</small>
        </Link>
      </div>
    </>
  );
};

export default Header;
