import { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";

import { css } from "./LoginScreenStyle";
import { cssImg } from "../../../Images/ImageStyle";

import { PasswordComponents } from "../../../components/PasswordComponents";
export const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const changeFocusedName = () => {
    setIsFocusName(!isFocusName);
  };
  const changeFocusedPass = () => {
    setIsFocusPass(!isFocusPass);
  };
  const validate = (name, pass) => {
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const lengthName = name.length >= 3;
    const validatePassword = regexPass.test(pass);

    if (lengthName && validatePassword) {
      return true;
    } else {
      Alert.alert("Не вірні дані", "Будь ласка перевірте правильність даних", [
        {
          text: "OK",
        },
      ]);
    }
  };

  const onLogin = () => {
    if (validate(name, password)) {
      setName("");
      setPassword("");
      navigation.navigate("Home", { name });
      console.log("success");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image source={require("../../../Images/backgo.png")} style={cssImg.loginImage} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={css.div}>
            <View style={css.logForm}>
              <Text style={css.titlePage}>Увійти</Text>
              <TextInput
                onFocus={changeFocusedName}
                onBlur={changeFocusedName}
                value={name}
                onChangeText={nameHandler}
                placeholder="User name"
                style={[css.input, isFocusName && css.inputFocused]}
              />
              <PasswordComponents
                onFocus={changeFocusedPass}
                onBlur={changeFocusedPass}
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                style={[css.input, isFocusPass && css.inputFocused]}
              />
            </View>
            <Pressable onPressIn={onLogin} style={css.logBtn}>
              <Text style={css.textLogBtn}>Увійти</Text>
            </Pressable>
            <View style={css.didntHaveAcc}>
              <Text style={css.textSignUp}>Немає акаунту? </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Registation");
                }}
              >
                <Text style={css.textSignUpBtn}>Зареєстуватись</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
