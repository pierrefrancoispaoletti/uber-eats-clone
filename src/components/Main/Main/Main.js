import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import AddressComponent from "../../../containers/AddressComponent/AddressComponent.container";
import FilteringComponent from "../FilteringComponent/FilteringComponent";
import Shop from "../../../containers/Shop/Shop.container";
import ShopList from "../ShopList/ShopList";
import "./main.css";
import Login from "../../../containers/Login/Login.container";

const Main = ({ shops }) => {
  const location = useLocation();
  return (
    <div className="main">
      <FilteringComponent />
      {location.pathname === "/" && (
        <>
          <Divider />
          <AddressComponent />
          <Divider />
        </>
      )}
      <Switch>
        <Route exact path="/">
          {shops ? (
            <ShopList shops={shops} />
          ) : (
            <p>désolé il n'y a pas de boutiques a afficher proche de vous</p>
          )}
        </Route>
        <Route path="/type/:type">
          {shops ? (
            <ShopList shops={shops} />
          ) : (
            <p>désolé il n'y a pas de boutiques a afficher proche de vous</p>
          )}
        </Route>
        <Route path="/shop/:shop/:id">
          <Shop />
        </Route>
        <Route>
          <Login path="/login" />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
