import { Pressable, StyleSheet } from "react-native";
import Logout from "react-native-vector-icons/Feather";

export const LogoutComponent = () => {
  const LogOut = () => {
    console.log("Log Out");
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
