import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Menu,
} from "semantic-ui-react";
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
        {user.typeUser === "Customer" && (
          <Link to="/account/orders">
            <Menu.Item active={location.pathname === "/account/orders"}>
              Mes Commandes
            </Menu.Item>
          </Link>
        )}
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
            <Link to="/account/subscribe">
              <Menu.Item active={location.pathname === "/account/subscribe"}>
                <Icon name="warning sign" size="large" color="red" /> Mon
                Abonnement
              </Menu.Item>
            </Link>
          </>
        )}
      </Menu>
      <Divider />
      <Container text textAlign="center">
        <Header as="h2">
          {" "}
          <Icon name="warning sign" size="huge" color="red" /> Important
        </Header>
        Afin de pouvoir encaisser vos paiements et de publier vos produits vous
        devez fournir des piéces justificatives a stripe.
      </Container>
      <Divider hidden />
      <Button
        color="blue"
        circular
        content="Renseigner mes informations stripe"
      />
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
            : location.pathname === "/account/subscribe"
            ? "Mon Abonnement"
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
