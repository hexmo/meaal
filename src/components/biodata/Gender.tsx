import { View } from "react-native";
import React, { useState } from "react";
import { TextInput, Text } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const Gender = () => {
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenderSelect = (gender:string) => {
    setGender(gender);
    setTimeout(() => setLoading(false), 2000);
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
        Select your gender
      </Text>
      
      

    </View>
  );
};

export default Gender;
