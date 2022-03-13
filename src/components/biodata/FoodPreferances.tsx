import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, themeColor } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const FoodPreferances = ({ navigation }) => {
  const [foodPreferance, setFoodPreferance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => navigation.navigate("Goal"), 1000);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        fontWeight="bold"
        size="h3"
        style={{
          alignSelf: "center",
        }}
      >
        Food Preferance
      </Text>
      <View style={{ marginVertical: 15 }}>
        {foodPreferanceOptions.map((option) => (
          <FoodPreferanceItem
            id={option.id}
            key={option.id}
            name={option.name}
            description={option.description}
            foodPreferance={foodPreferance}
            setFoodPreferance={setFoodPreferance}
          />
        ))}
      </View>
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default FoodPreferances;

const FoodPreferanceItem = ({
  id,
  name,
  description,
  foodPreferance,
  setFoodPreferance,
}) => {
  return (
    <Pressable
      style={[styles.card, foodPreferance == id ? styles.activeCard : null]}
      onPress={() => setFoodPreferance(id)}
    >
      <Text
        fontWeight="bold"
        size="lg"
        style={foodPreferance == id ? styles.activeText : styles.null}
      >
        {name}
      </Text>
      <Text style={foodPreferance == id ? styles.activeText : styles.null}>
        {description}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: themeColor.white,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    elevation: 16,
    alignItems: "center",
  },
  activeCard: { backgroundColor: "#2bb141" },
  activeText: { color: themeColor.white },
  null: {},
});

const foodPreferanceOptions = [
  {
    id: "keto",
    name: "Keto Diet",
    description:
      "The ketogenic diet (or keto diet, for short) is a low carb, high fat diet that offers many health benefits.",
  },
  {
    id: "vegan",
    name: "Vegan Diet",
    description:
      "A vegan diet contains only plants (such as vegetables, grains, nuts and fruits) and foods made from plants.",
  },
  {
    id: "nepaliveg",
    name: "Nepali Veg Diet",
    description:
      "Nepali vegan diet contains plants as well as daily products. It also consists products like honey.",
  },
  {
    id: "nepali",
    name: "Nepali Diet",
    description:
      "Nepali diet consists of meals that are reguraly consumed in Nepali household like dal-bhat, tarkari and aachar e.t.c.",
  },
];
