import React, { useState } from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import { SafeArea } from "../../../components/safearea.component";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components/restaurant-info.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  background-color: lavender;
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
          inputStyle={{ outline: "none" }}
        />
      </SearchContainer>
      <RestaurantList
        data={[1, 2, 3]}
        renderItem={RestaurantInfo}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
