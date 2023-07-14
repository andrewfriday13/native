import { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";

import { css } from "./LoginScreenStyle";
import { cssImg } from "../Images/ImageStyle";

import { PasswordComponents } from "./PasswordComponents";
export const LoginScreen = () => {
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
  const onLogin = () => {
    console.log({ name, password });
    console.log(window);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image source={require("../Images/backgo.png")} style={cssImg.loginImage} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={css.div}>
            <View style={css.logForm}>
              <Text style={css.titlePage}>Увійти</Text>
              <TextInput
                onFocus={changeFocusedName}
                onBlur={changeFocusedName}
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
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
              <Pressable>
                <Text style={css.textSignUpBtn}>Зареєстуватись</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
