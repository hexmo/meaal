import { View, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { themeColor, Text } from "react-native-rapi-ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../../initSupabase";
import { useNavigation } from "@react-navigation/native";

const SubscriptionPlans = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        fontWeight="bold"
        size="h2"
        style={{
          alignSelf: "center",
        }}
      >
        Choose a{" "}
        <Text fontWeight="bold" size="h2" style={{ color: "#2bb141" }}>
          Plan
        </Text>
      </Text>
      <View style={{ marginVertical: 15 }}>
        {subscriptionPlanOptions.map((option) => (
          <GoalItem
            key={option.id}
            name={option.name}
            price={option.price}
            disabled={option.disable}
          />
        ))}
      </View>
    </View>
  );
};

const GoalItem = ({ name, price, disabled }) => {
  const navigation = useNavigation();
  const [userDetails, setDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((v) => setDetails(v));
  }, []);

  async function updateProfile() {
    try {
      console.log("User details update started.");
      const user = supabase.auth.user();

      const { error } = await supabase.from("profiles").upsert(
        {
          id: user.id,
          data: { ...userDetails, onboardingCompleted: true },
        },
        {
          returning: "minimal", // Don't return the value after inserting
        }
      );

      if (error) {
        console.log(error.message);
        alert(error.message);
        throw error;
      } else {
        completeOnboarding();
      }
    } catch (error) {
      alert(error.message);
    } finally {
      console.log("User details update end.");
    }
  }

  const completeOnboarding = () => {
    updateUserDetails({ ...userDetails, onboardingCompleted: true }).then(() =>
      navigation.replace("MainHome")
    );
  };

  return (
    <Pressable
      style={[styles.card, disabled ? styles.disabledCard : styles.null]}
      onPress={() => {
        updateProfile();
      }}
      disabled={disabled}
    >
      <Text fontWeight="bold" size="lg">
        {name}
      </Text>
      <View style={styles.priceCard}>
        <Text fontWeight="bold" size="h3" style={{ color: themeColor.white }}>
          {price}
        </Text>
      </View>
    </Pressable>
  );
};

export default SubscriptionPlans;

const styles = StyleSheet.create({
  card: {
    backgroundColor: themeColor.white,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    elevation: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
  },
  disabledCard: { opacity: 0.5 },
  priceCard: {
    backgroundColor: "#2bb141",
    padding: 15,
    borderRadius: 10,
  },
  null: {},
});

const subscriptionPlanOptions = [
  {
    id: "yearly",
    name: "Yearly Plan",
    price: "NRs 4,999",
    disable: true,
  },
  {
    id: "sixMonths",
    name: "6 Months Plan",
    price: "NRs 2,999",
    disable: true,
  },
  {
    id: "singleMonth",
    name: "1 Month Plan",
    price: "NRs 999.0",
    disable: true,
  },
  {
    id: "trial15",
    name: "15 Days Test Plan",
    price: "NRs 799.0",
    disable: true,
  },
  {
    id: "trial",
    name: "7 Days Trial Plan",
    price: "NRs 00.00",
    disable: false,
  },
];

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
