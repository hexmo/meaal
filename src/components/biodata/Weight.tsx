import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const Weight = ({ navigation }) => {
  const [userDetails, setDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((v) => setDetails(v));
  }, []);

  const [weight, setWeight] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);
    if (weight == "") {
      alert("Please enter proper weight measurement to continue.");
      setLoading(false);
      return;
    }

    updateUserDetails({ weight, ...userDetails }).then(() =>
      navigation.navigate("Age")
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
        Weight
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
          value={weight}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(text: string) => setWeight(text)}
          style={{ flex: 1 }}
        />
        <Text fontWeight="bold" size="lg" style={{ marginLeft: 10 }}>
          KG
        </Text>
      </View>
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default Weight;

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
