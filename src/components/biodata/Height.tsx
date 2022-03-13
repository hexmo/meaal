import { View } from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

import { getUserDetails, updateUserDetails } from "../../storage/LocalStore";
const userDetails = getUserDetails();

const Height = ({ navigation }) => {
  const [height, setHeight] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);

    if (height == "") {
      alert("Please enter proper height to continue.");
      setLoading(false);
      return;
    }

    updateUserDetails({ height, ...userDetails });

    navigation.navigate("Weight");
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
