import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  background-color: lavender;
`;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

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
          inputStyle={{ outline: "none" }}
        />
      </SearchContainer>
      <RestaurantList
        data={DATA}
        renderItem={RestaurantInfo}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
