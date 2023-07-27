import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";
import Logout from "react-native-vector-icons/Feather";

export const LogoutComponent = () => {
  const navigation = useNavigation();
  const LogOut = () => {
    navigation.navigate("Login");
  };
  return (
    <Pressable onPress={LogOut}>
      <Logout name="log-out" style={styles.btn} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  btn: {
    color: "#BDBDBD",
    fontSize: 24,
    right: 10,
  },
});
