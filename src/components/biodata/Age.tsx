import { View } from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

import { getUserDetails, updateUserDetails } from "../../storage/LocalStore";
const userDetails = getUserDetails();

const Age = ({ navigation }) => {
  const [age, setAge] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);

    if (age == "") {
      alert("Please input proper age to continue.");
      setLoading(false);
      return;
    }

    updateUserDetails({ age, ...userDetails });
    navigation.navigate("FoodPreferances");
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
        Age
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
          value={age}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(text: string) => setAge(text)}
          style={{ flex: 1 }}
        />
        <Text fontWeight="bold" size="lg" style={{ marginLeft: 10 }}>
          Years
        </Text>
      </View>
      <NextButton loading={loading} onPress={handleNext} />
    </View>
  );
};

export default Age;
