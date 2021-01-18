import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { Container, Divider, Menu } from "semantic-ui-react";
import Orders from "../Orders/Orders";
import RegisterForm from "../Register/RegisterForm";
import Sells from "../Sells/Sells";
import StoreManagement from "../../containers/StoreManagement/StoreManagement";

const Account = ({ user }) => {
  const location = useLocation();
  return (
    <Container textAlign="center">
      <Menu compact size="small">
        <Link to="/account/user-infos">
          <Menu.Item active={location.pathname === "/account/user-infos"}>
            Mes infos
          </Menu.Item>
        </Link>
        <Link to="/account/orders">
          <Menu.Item active={location.pathname === "/account/orders"}>
            Mes Commandes
          </Menu.Item>
        </Link>
        {user.userId.typeUser === "Merchant" && (
          <>
            <Link to="/account/store-management">
              <Menu.Item
                active={location.pathname === "/account/store-management"}
              >
                Gérer ma Boutique
              </Menu.Item>
            </Link>
            <Link to="/account/sells">
              <Menu.Item active={location.pathname === "/account/sells"}>
                Mes Ventes
              </Menu.Item>
            </Link>
          </>
        )}
      </Menu>
      <Divider />
      <Container text textAlign="center">
        <h2>
          {location.pathname === "/account/user-infos"
            ? "Mes Informations"
            : location.pathname === "/account/orders"
            ? "Mes Commandes"
            : location.pathname === "/account/store-management"
            ? "Gérer ma Boutique"
            : location.pathname === "/account/sells"
            ? "Mes Ventes"
            : ""}
        </h2>
        <Divider />
        <Switch>
          <Route exact path="/account/user-infos">
            <RegisterForm user={user} />
          </Route>
          <Route exact path="/account/orders">
            <Orders />
          </Route>
          <Route exact path="/account/store-management">
            <StoreManagement />
          </Route>
          <Route exact path="/account/sells">
            <Sells />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
};

export default Account;
