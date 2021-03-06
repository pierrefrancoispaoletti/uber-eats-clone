import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import AddressComponent from "../../../containers/AddressComponent/AddressComponent.container";
import FilteringComponent from "../FilteringComponent/FilteringComponent";
import Shop from "../../../containers/Shop/Shop.container";
import ShopList from "../ShopList/ShopList";
import "./main.css";
import Login from "../../../containers/Login/Login.container";
import Checkout from "../../../containers/Checkout/Chekout.container";
import Register from "../../Register/Register";
import RegisterForm from "../../Register/RegisterForm";
import Account from "../../../containers/Account/Account";
import Payment from "../../../containers/Payment/Payment.container";

const Main = ({ shops, user, loading }) => {
  const location = useLocation();
  return (
    <div className="main">
      <FilteringComponent />
      {location.pathname === "/" && (
        <>
          <Divider />
          <AddressComponent userAddress={user?.address || ""} />
          <Divider />
        </>
      )}
      <Switch>
        <Route exact path="/">
          <ShopList loading={loading} shops={shops} />
        </Route>
        <Route path="/type/:type">
          <ShopList loading={loading} shops={shops} />
        </Route>
        <Route path="/shop/:shop/:id">
          {user ? <Shop /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route exact path="/register/">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/cart">{user ? <Checkout /> : <Redirect to="/" />}</Route>
        <Route path="/register/:registerType">
          {!user ? <RegisterForm /> : <Redirect to="/" />}
        </Route>
        <Route path="/account">
          {user ? <Account /> : <Redirect to="/login" />}
        </Route>
        <Route path="/payment">
          {user ? <Payment /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
