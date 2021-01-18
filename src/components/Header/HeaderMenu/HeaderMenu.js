import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const HeaderMenu = ({ setVisible, visible, children, user }) => {
  const location = useLocation();
  const handleOnHide = (e,data) => {
    if(!e.target.classList.contains('NoClose')) {
      setVisible(false)
    }
  }
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        onShow={() => setVisible(true)}
        onHide={(e, data) => handleOnHide(e,data)}
        vertical
        visible={visible}
        width="thin"
      >
        <Link to="/">
          <Image centered size="medium" src="/assets/images/kants.png" />
        </Link>
        {!user && (
          <>
            <Link to="/login">
              <Menu.Item active={location.pathname === "/login"}>
                <Icon name="home" />
                Connexion
              </Menu.Item>
            </Link>
            <Link to="/register">
              <Menu.Item active={location.pathname === "/register"}>
                <Icon name="user circle" />
                Inscription
              </Menu.Item>
            </Link>
          </>
        )}
        {user && (
          <>
            <Link to="/cart">
              <Menu.Item active={location.pathname === "/cart"}>
                <Icon name="cart" />
                Mon Panier
              </Menu.Item>
            </Link>
            <Link to="/account/user-infos">
              <Menu.Item active={location.pathname === "/account"}>
                <Icon name="lock" />
                Mon Compte
              </Menu.Item>
            </Link>
            {user.userId?.typeUser === "Merchant" && (
              <Link to="/account/store-management">
                <Menu.Item active={location.pathname === "/account/store-management"}>
                  <Icon name="money bill alternate" />
                  Gérer ma boutique
                </Menu.Item>
              </Link>
            )}
          </>
        )}
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default HeaderMenu;
