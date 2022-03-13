import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, themeColor } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const Goal = ({ navigation }) => {
  const [goal, setGoal] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => navigation.navigate("SubscriptionPlans"), 1000);
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
        What is your{" "}
        <Text fontWeight="bold" size="h3" style={{ color: "#2bb141" }}>
          Goal?
        </Text>
      </Text>
      <View style={{ marginVertical: 15 }}>
        {goalOptions.map((option) => (
          <GoalItem
            id={option.id}
            key={option.id}
            name={option.name}
            goal={goal}
            setGoal={setGoal}
          />
        ))}
      </View>
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default Goal;

const GoalItem = ({ id, name, goal, setGoal }) => {
  return (
    <Pressable
      style={[styles.card, goal == id ? styles.activeCard : null]}
      onPress={() => setGoal(id)}
    >
      <Text
        fontWeight="bold"
        size="h3"
        style={goal == id ? styles.activeText : styles.null}
      >
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: themeColor.white,
    marginVertical: 5,
    borderRadius: 10,
    padding: 15,
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

const goalOptions = [
  {
    id: "looseWeight",
    name: "To Loose Weight",
  },
  {
    id: "gainWeight",
    name: "To Gain Weight",
  },
  {
    id: "looseFat",
    name: "To Loose Fat",
  },
  {
    id: "buildMuscle",
    name: "To Build Muscle",
  },
];
