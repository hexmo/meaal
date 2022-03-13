import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { themeColor, Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

import { getUserDetails, updateUserDetails } from "../../storage/LocalStore";
const userDetails = getUserDetails();

const Name = ({ navigation }) => {
  const [fullName, setFullName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);

    if (fullName == "") {
      alert("Invalid Name");
      setLoading(false);
      return;
    }

    updateUserDetails({ fullName, ...userDetails });
    navigation.navigate("Gender");
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
