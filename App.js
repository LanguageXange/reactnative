import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
// yarn lint to run linting
//console.log(StatusBar.currentHeight, "this will solve android issue as SafeAreaView works only on iOS");
export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
