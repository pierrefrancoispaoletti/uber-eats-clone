import React from "react";
import { Route, Switch } from "react-router-dom";
import { Shops } from "../../../datas";
import FilteringComponent from "../FilteringComponent/FilteringComponent";
import Populaire from "../Populaire/Populaire";
import Shop from "../Shop/Shop";
import ShopList from "../ShopList/ShopList";

const Main = () => {
  return (
    <div className="main">
      <FilteringComponent />
      <Populaire />
      <Switch>
      <Route exact path="/">
          <ShopList shops={Shops} />
        </Route>
        <Route  path="/type/:type">
          <ShopList shops={Shops} />
        </Route>
        <Route path="/shop/:shop/:id">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
