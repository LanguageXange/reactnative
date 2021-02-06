import React, { useState } from "core-js/library/fn/reflect/es7/metadata";
import styled from "styled-components";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const RestaurantScreen = () => {
  const [query, setQuery] = useState("");
  const onSearch = (input) => setQuery(input);
  return (
    <SafeArea style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          onChangeText={onSearch}
          placeholder="Search ..."
          value={query}
        />

        <Text>You are searching: {query}</Text>
      </View>

      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  searchBarContainer: {
    backgroundColor: "#fb850b",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    fontSize: 20,
  },
  list: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 15,
  },
});
