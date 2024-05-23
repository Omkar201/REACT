import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userestaurantmenu from "../utiles/Userestaurantmenu";

import Shimmermenu from "./Shimmermenu"

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
const menu=userestaurantmenu(id)

 
const menu_url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="


  if (menu == null) return<Shimmermenu/>;


  const { name, costForTwoMessage } = menu?.data?.cards[2]?.card?.card?.info;
  console.log(name);


  return (
    <div>
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
    </div>
  );
};


export default RestaurantMenu;