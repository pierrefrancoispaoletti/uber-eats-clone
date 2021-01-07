import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../../datas";
import "./filteringcomponent.css";

const FilteringComponent = () => {
  return (
    <nav className="filteringcomponent__nav">
      <ul className="filteringcomponent__ul">
        {MenuItems.map((item) => (
          <Link to={`/${item.route}`}>
            <li className="filteringcomponent__li">
              <div className="filteringcomponent__imgwrap">
                <img className="filteringcomponent__img" src={item.image} />
              </div>
              <p>{item.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default FilteringComponent;
