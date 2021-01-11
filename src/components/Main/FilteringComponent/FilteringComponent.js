import React from "react";
import { Link } from "react-router-dom";
import { MerchantType } from "../../../datas";
import { uniqueKeyID } from "../../../utils";
import "./filteringcomponent.css";

const FilteringComponent = () => {
  return (
    <nav className="filteringcomponent__nav">
      <ul className="filteringcomponent__ul">
        {MerchantType.map((type) => (
          <Link key={uniqueKeyID()} to={`/type/${type.name}`} >
            <li className="filteringcomponent__li">
              <div className="filteringcomponent__imgwrap">
                <img className="filteringcomponent__img" src={type.image} alt={type.name} />
              </div>
              <span className="filteringcomponent__span">
                <div className="filteringcomponent__span__div">{type.name}</div>
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default FilteringComponent;
