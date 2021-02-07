import React from "react";
import { SvgXml } from "react-native-svg";
//import star from "../../../assets/star";
// star file is .js file ??
// Lets turn this into roadmap app?!
// how to use svg icon in react native
//
import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Address,
  Info,
  Rating,
} from "./restaurant-info.styles";

export const RestaurantInfo = (restaurant) => {
  const {
    name = "cool name",
    icon = "",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "random",
    isOpen = "true",
    rating = 3,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <h5>star here</h5>
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
