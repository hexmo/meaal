import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, themeColor } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const FoodPreferances = ({ navigation }) => {
  const [userDetails, setDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((v) => setDetails(v));
  }, []);

  const [foodPreferance, setFoodPreferance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);

    if (foodPreferance == "") {
      alert("Please select a food option to continue.");
      setLoading(false);
      return;
    }

    updateUserDetails({ ...userDetails, foodPreferance }).then(() =>
      navigation.navigate("Goal")
    );
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

import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserDetails = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@userDetail");
    console.log(JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert("Something went wrong. Try again later.");
  }
};

const updateUserDetails = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@userDetail", jsonValue);
  } catch (e) {
    alert("Something went wrong. Try again later.");
  }
};
