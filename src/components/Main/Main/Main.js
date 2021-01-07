import React from "react";
import { Route, Switch } from "react-router-dom";
import { Restaurants } from "../../../datas";
import FilteringComponent from "../FilteringComponent/FilteringComponent";
import Populaire from "../Populaire/Populaire";
import RestaurantList from "../RestaurantList/RestaurantList";

const Main = () => {
  return (
    <div className="main">
      <FilteringComponent />
      <Populaire />
      <Switch>
        <Route exact path="/">
          <RestaurantList restaurants={Restaurants} />
        </Route>
        <Route path="/:category">
          <RestaurantList restaurants={Restaurants} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
