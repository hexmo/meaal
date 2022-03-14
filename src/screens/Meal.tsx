import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

const Meal = ({ type, name, calories, description }) => {
  return (
    <View style={styles.card}>
      <View style={{ width: "80%", padding: 10 }}>
        <Text size="lg" fontWeight="bold">
          {type}
        </Text>
        <Text
          size="xl"
          fontWeight="bold"
          style={{ marginVertical: 5, color: themeColor.black200 }}
        >
          {name}
        </Text>
        <Text size="md">{description}</Text>
      </View>

      <View
        style={{
          width: "20%",
          backgroundColor: "#2bb141",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text
          size="h2"
          fontWeight="bold"
          style={{ color: themeColor.white100 }}
        >
          {calories}
        </Text>
        <Text fontWeight="bold" style={{ color: themeColor.white100 }}>
          Cal
        </Text>
      </View>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: themeColor.white,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    elevation: 7,
  },
});
