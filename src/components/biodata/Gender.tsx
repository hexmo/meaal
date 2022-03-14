import { View, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { themeColor, Text } from "react-native-rapi-ui";
import NextButton from "../NextButton";
import { Foundation } from "@expo/vector-icons";

const Gender = ({ navigation }) => {
  const [userDetails, setDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((v) => setDetails(v));
  }, []);

  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenderSelect = (gender: string) => {
    setGender(gender);
  };

  const handleNext = () => {
    setLoading(true);

    if (gender == "") {
      alert("Please select a gender to continue.");
      setLoading(false);
      return;
    }

    updateUserDetails({ ...userDetails, gender }).then(() =>
      navigation.navigate("Height")
    );
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
