import React from "react";
// Lets turn this into roadmap app?!
import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
} from "./restaurant-info.styles";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "nameee",
    icon = "",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "random",
    isOpen = "true",
    rating = "3",
  } = restaurant;
  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <RestaurantCardCover
        key={name}
        style={styles.cover}
        source={{ uri: photos[0] }}
      />
      <Title style={styles.title}>{name}</Title>
    </RestaurantCard>
  );
};
