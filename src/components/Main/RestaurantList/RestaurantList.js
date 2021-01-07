import React from "react";
import { useParams } from "react-router-dom";
import RestaurantItem from "./RestaurantItem/RestaurantItem";
import "./restaurantlist.css";

const RestaurantList = ({ restaurants }) => {
  let { category } = useParams();
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.category === category;
  });
  return (
    <div className="restaurantlist">
      {category ? (
        <>
          <div className="restaurantcategory">
            <h1>« {category} »</h1>
            <h2>{filteredRestaurants?.length} restaurants</h2>
          </div>
          {filteredRestaurants?.map((restaurant) => (
            <RestaurantItem {...restaurant} />
          ))}
        </>
      ):(
        <>
        {restaurants?.map((restaurant) => (
            <RestaurantItem {...restaurant} />
          ))}
          </>
      )
      }
    </div>
  );
};

export default RestaurantList;
