import { View, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import { themeColor, Text } from "react-native-rapi-ui";

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
  const handlePlanSelect = () => {
    Alert.alert("We are processing you request.");
  };

  return (
    <Pressable
      style={[styles.card, disabled ? styles.disabledCard : styles.null]}
      onPress={handlePlanSelect}
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
