import React from "react";
//import { SvgXml } from "react-native-svg"; // try this later
//import { xml } from "../../../assets/star.js";
//https://react-svgr.com/playground/?native=true&typescript=true to convert svg

import { MyText } from "../../components/text.component"; // reusable text!
import { SvgComponent } from "./star.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
} from "./restaurant-info.styles";

export const RestaurantInfo = (restaurant) => {
  const {
    name = "Delicious Food Restaurant",
    icon = "",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "random address of the restaurant",
    isOpen = false,
    rating = 4,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
      <Info>
        <MyText variant="label">{name}</MyText>

        <Rating>
          {ratingArray.map(() => (
            <SvgComponent />
          ))}
        </Rating>
        <Address>{address}</Address>
        {isOpen ? (
          <MyText variant="caption">open now</MyText>
        ) : (
          <MyText variant="error"> closed</MyText>
        )}
      </Info>
    </RestaurantCard>
  );
};
