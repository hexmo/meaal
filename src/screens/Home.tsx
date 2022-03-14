import React, { useState, useEffect } from "react";
import { View, Alert, ScrollView, Pressable, StyleSheet } from "react-native";
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
import Meal from "./Meal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ({ navigation }) {
  const [mealPlan, setActivePlan] = useState(mealPlans);
  const [activeMeal, setActiveMeal] = useState(
    mealPlan.filter((option) => option.active)[0]
  );

  useEffect(() => {
    let results = mealPlan.filter((option) => option.active);
    setActiveMeal(results[0]);
  }, [mealPlan]);

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
            AsyncStorage.clear().then(() => alert("Signed out!"));
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
      <ScrollView
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
          <ScrollView
            horizontal={true}
            style={{ marginVertical: 15, paddingHorizontal: 15 }}
          >
            {mealPlan.map((option) => (
              <Day
                key={option.day}
                day={option.day}
                mealPlan={mealPlan}
                setActivePlan={setActivePlan}
                active={option.active}
              />
            ))}
          </ScrollView>

          {activeMeal && (
            <View style={{ padding: 15 }}>
              <Meal
                type={"Breakfast"}
                name={activeMeal.breakfast.name}
                calories={activeMeal.breakfast.calories}
                description={activeMeal.breakfast.description}
              />
              <Meal
                type={"Lunch"}
                name={activeMeal.lunch.name}
                calories={activeMeal.lunch.calories}
                description={activeMeal.lunch.description}
              />
              <Meal
                type={"Snacks"}
                name={activeMeal.snacks.name}
                calories={activeMeal.snacks.calories}
                description={activeMeal.snacks.description}
              />
              <Meal
                type={"Dinner"}
                name={activeMeal.dinner.name}
                calories={activeMeal.dinner.calories}
                description={activeMeal.dinner.description}
              />
              <Meal
                type={"Exercise"}
                name={"30 min Cardio"}
                calories={"-450"}
                description={
                  "30 minutes of fast paced exercise will help to reach nearer to you fitness goal."
                }
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
}

const Day = ({ day, mealPlan, setActivePlan, active }) => {
  const handlePress = () => {
    const newPlan = mealPlan.map((plan) => {
      if (plan.day == day) {
        return { ...plan, active: true };
      } else {
        return { ...plan, active: false };
      }
    });

    setActivePlan(newPlan);
  };

  return (
    <Pressable
      style={[
        styles.dayButtons,
        active ? styles.activeDayButtons : styles.null,
      ]}
      onPress={() => handlePress()}
    >
      <Text size="lg" fontWeight="bold">
        Day {day}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dayButtons: {
    backgroundColor: themeColor.white,
    margin: 5,
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    elevation: 7,
  },
  activeDayButtons: {
    backgroundColor: "#2bb141",
  },
  null: {},
});

const mealPlans = [
  {
    day: 1,
    breakfast: {
      name: "Fruits",
      calories: "397",
      description:
        "An apple to keep doctor away. A banana to provide you macro nutritients.",
    },
    lunch: {
      name: "Rice, Dal and Soya Chunks",
      calories: "800",
      description:
        "A medium size bowl of rice with at least 100 grams of green vegetables. And a bowl of soya chunks to pump your body with protien.",
    },
    snacks: {
      name: "Momo",
      calories: "511",
      description:
        "Hmm, looks like a cheat day. Enjoy delicious momo. Don't worry about the calories we have managed it from other foods.",
    },
    dinner: {
      name: "Roti with Chicken",
      calories: "500",
      description:
        "3-4 pieces of flat bread with a 200g serving of chicken meat. Low calorie pickle and salads are encouraged.",
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
      name: "Oats and milk",
      calories: "400",
      description: "100g of oats with 200ml of fat free milk.",
    },
    lunch: {
      name: "Rice, Dal and Mushroom",
      calories: "700",
      description:
        "A medium size bowl of rice with at least 100 grams mushroom. Your body needs the nutrients form the fungi.",
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
