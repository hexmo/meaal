import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState } from "react";
import { Layout } from "react-native-rapi-ui";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Biodata form screens
import FoodPreferances from "../../components/biodata/FoodPreferances";
import Gender from "../../components/biodata/Gender";
import Goal from "../../components/biodata/Goal";
import Height from "../../components/biodata/Height";
import Name from "../../components/biodata/Name";
import SubscriptionPlans from "../../components/biodata/SubscriptionPlans";
import Weight from "../../components/biodata/Weight";
import Age from "../../components/biodata/Age";
import Home from "../Home";

const BiodataStack = createNativeStackNavigator();

export default function BiodataForm() {
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <BiodataStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <BiodataStack.Screen name="Name" component={Name} />
            <BiodataStack.Screen name="Gender" component={Gender} />
            <BiodataStack.Screen name="Height" component={Height} />
            <BiodataStack.Screen name="Weight" component={Weight} />
            <BiodataStack.Screen name="Age" component={Age} />
            <BiodataStack.Screen name="Goal" component={Goal} />
            <BiodataStack.Screen
              name="FoodPreferances"
              component={FoodPreferances}
            />
            <BiodataStack.Screen
              name="SubscriptionPlans"
              component={SubscriptionPlans}
            />
            <BiodataStack.Screen name="MainHome" component={Home} />
          </BiodataStack.Navigator>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}

const bioData = {
  fullName: "",
  gender: "",
  weight: "",
  height: "",
  goal: "", // Gain Weight, Lose Weight, Build Muscle
  foodPreferances: "", // Veg, vegan, non-veg
  subscribedDays: "", // 7 days plan, 15 days plan
};
