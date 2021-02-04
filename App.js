import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
// yarn lint to run linting
//console.log(StatusBar.currentHeight, "this will solve android issue as SafeAreaView works only on iOS");
export default function App() {
  const [query, setQuery] = useState("");

  const onSearch = (input) => setQuery(input);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            onChangeText={onSearch}
            placeholder="Search ..."
            value={query}
          />

          <Text>You are searching: {query}</Text>
        </View>

        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
