import { Button, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const NextButton = ({ loading, onPress }) => {
  return (
    <View style={{ paddingHorizontal: "15%", marginVertical: 10 }}>
      <Button
        text={loading ? "Loading" : "Continue"}
        color={"#2bb141"}
        rightContent={
          <Ionicons name="arrow-forward" size={20} color={themeColor.white} />
        }
        disabled={loading}
        style={{ borderRadius: 25 }}
        size="lg"
        onPress={onPress}
      />
    </View>
  );
};

export default NextButton;
