import Constants from "expo-constants";
import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import HomeProfileHeader from "../LogoProfileHeader";

export default function Container({
  children,
  cusStyles,
  modal = false,
  bgclr = "#fff",
  pd = 8,
  isHomeHeader = false,
}) {
  const height = Constants.statusBarHeight;
  return (
    <View
      style={[
        containerStyles.container,
        {
          backgroundColor: bgclr,
          padding: pd,
        },
        modal
          ? { paddingTop: Platform.OS === "ios" ? 10 : height }
          : {
              paddingTop: cusStyles?.padding !== undefined ? 0 : height, // Exclude status bar height if padding is overridden
            },
        cusStyles,
      ]}
    >
      {isHomeHeader && <HomeProfileHeader />}
      {children}
    </View>
  );
}

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});
