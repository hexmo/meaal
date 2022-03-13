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

export { getUserDetails, updateUserDetails };
