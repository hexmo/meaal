import { View } from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "react-native-rapi-ui";
import NextButton from "../NextButton";

const Weight = ({ navigation }) => {
  const [weight, setWeight] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => navigation.navigate("FoodPreferances"), 1000);
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
