import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { themeColor, Text } from "react-native-rapi-ui";
import NextButton from "../NextButton";
import { Foundation } from "@expo/vector-icons";

const Gender = ({ navigation }) => {
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenderSelect = (gender: string) => {
    setGender(gender);
  };

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => navigation.navigate("Height"), 1000);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Text
        fontWeight="bold"
        size="h3"
        style={{
          alignSelf: "center",
          marginBottom: 40,
        }}
      >
        Select your gender
      </Text>

      <Pressable
        style={[styles.genderIcon, gender == "male" ? styles.selected : null]}
        onPress={() => setGender("male")}
      >
        <Foundation name="male-symbol" size={100} color="#21A8FA" />
      </Pressable>
      <Pressable
        style={[styles.genderIcon, gender == "female" ? styles.selected : null]}
        onPress={() => setGender("female")}
      >
        <Foundation name="female-symbol" size={100} color="#F62681" />
      </Pressable>
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  genderIcon: {
    width: 100,
    marginBottom: 20,
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: themeColor.white200,
  },
  selected: {
    backgroundColor: themeColor.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 16,
  },
});
