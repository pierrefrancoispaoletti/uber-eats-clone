import React, { useState } from "react";
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
            {shops ? (
              <ShopList loading={loading} shops={shops} />
            ) : (
              <p>désolé il n'y a pas de boutiques a afficher proche de vous</p>
            )}
          </Route>
        <Route path="/type/:type">
          {shops ? (
            <ShopList loading={loading} shops={shops} />
          ) : (
            <p>désolé il n'y a pas de boutiques a afficher proche de vous</p>
          )}
        </Route>
        <Route path="/shop/:shop/:id">
          {user ? <Shop /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/cart">{user ? <Checkout /> : <Redirect to="/" />}</Route>
      </Switch>
    </div>
  );
};

export default Main;
