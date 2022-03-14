import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const Height = ({ navigation }) => {
  const [userDetails, setDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((v) => setDetails(v));
  }, []);

  const [height, setHeight] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);

    if (height == "") {
      alert("Please enter proper height to continue.");
      setLoading(false);
      return;
    }

    updateUserDetails({ ...userDetails, height }).then(() =>
      navigation.navigate("Weight")
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
        Height
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "30%",
        }}
      >
        <TextInput
          containerStyle={{ marginVertical: 20 }}
          placeholder="00"
          value={height}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(text: string) => setHeight(text)}
          style={{ flex: 1 }}
        />
        <Text fontWeight="bold" size="lg" style={{ marginLeft: 10 }}>
          CM
        </Text>
      </View>
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default Height;

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
