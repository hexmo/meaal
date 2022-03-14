import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { themeColor, Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const Name = ({ navigation }) => {
  const [userDetails, setDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((v) => setDetails(v));
  }, []);

  const [fullName, setFullName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);

    if (fullName == "") {
      alert("Invalid Name");
      setLoading(false);
      return;
    }

    updateUserDetails({ ...userDetails, fullName }).then(() =>
      navigation.navigate("Gender")
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Text
        fontWeight="bold"
        size="h3"
        style={{
          alignSelf: "center",
        }}
      >
        Full Name
      </Text>
      <TextInput
        containerStyle={{ marginVertical: 20 }}
        placeholder="Enter your name"
        value={fullName}
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text: string) => setFullName(text)}
      />
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default Name;

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
