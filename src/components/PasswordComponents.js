import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export const PasswordComponents = ({ value, onChangeText, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <TextInput value={value} onChangeText={onChangeText} secureTextEntry={!showPassword} {...props} />
      <TouchableOpacity onPress={togglePassword} style={css.showPassword}>
        <Text style={css.textShow}>{showPassword ? "Приховати" : "Показати"} </Text>
      </TouchableOpacity>
    </View>
  );
};

const css = StyleSheet.create({
  showPassword: {
    position: "absolute",
    bottom: 3,
    right: 16,
    paddingTop: 16,
    paddingBottom: 15,
  },
  textShow: {
    fontFamily: "Roboto-Regular",
    color: "rgba(27, 67, 113, 1)",
  },
});
