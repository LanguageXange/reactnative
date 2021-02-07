import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantScreen = () => {
  const [query, setQuery] = useState("");
  const onSearch = (input) => setQuery(input);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          onChangeText={onSearch}
          placeholder="Search ..."
          value={query}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
};
