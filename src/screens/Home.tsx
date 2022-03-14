import React, { useState } from "react";
import { View, Alert, ScrollView, Pressable } from "react-native";
import { supabase } from "../initSupabase";
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
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const [mealPlan, setActivePlan] = useState(mealPlans);

  const handleSignOut = () => {
    Alert.alert("Sign Out Alert", "Do you really want to sign out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Sign Out",
        onPress: async () => {
          const { error } = await supabase.auth.signOut();
          if (!error) {
            alert("Signed out!");
          }
          if (error) {
            alert(error.message);
          }
        },
      },
    ]);
  };

  return (
    <Layout>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <Text size="h3" fontWeight="bold">
            My{" "}
            <Text size="h3" fontWeight="bold" style={{ color: "#2bb141" }}>
              Meaal Plans
            </Text>
          </Text>
          <Button
            onPress={handleSignOut}
            rightContent={
              <Ionicons
                name="log-out-outline"
                size={20}
                color={themeColor.white}
              />
            }
            size="sm"
            status="danger"
          />
        </View>

        <View>
          <ScrollView horizontal={true} style={{ paddingHorizontal: 15 }}>
            {mealPlan.map((option) => (
              <Day day={option.day} mealPlan setActivePlan />
            ))}
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
}

const Day = ({ day, mealPlan, setActivePlan }) => {
  return (
    <Pressable
      style={{
        backgroundColor: themeColor.info300,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 15,
        paddingHorizontal: 20,
      }}
    >
      <Text size="lg" fontWeight="bold">
        Day {day}
      </Text>
    </Pressable>
  );
};

const mealPlans = [
  {
    day: 1,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: false,
  },
  {
    day: 2,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: true,
  },
  {
    day: 3,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: false,
  },
  {
    day: 4,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: false,
  },
  {
    day: 5,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: false,
  },
  {
    day: 6,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: false,
  },
  {
    day: 7,
    breakfast: {
      name: "Pancake with honey",
      calories: "400",
      description: "200 grams of pancake serving with 2 table spoons of honey.",
    },
    lunch: {
      name: "Rice, Dal and Vegetable",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. Avoid potatoes and you can eat any daal.",
    },
    snacks: {
      name: "Pasta with vegetable",
      calories: "400",
      description: "Pasta with veggies like spinach, mushroom and tomatoes.",
    },
    dinner: {
      name: "Roti and Gedagudi ",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a medium size serving of beans. Low calorie pickle and salads are encouraged.",
    },
    active: false,
  },
];
