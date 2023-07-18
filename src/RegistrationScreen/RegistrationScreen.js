import { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { css } from "./RegistrationScreenStyle";
import { cssImg } from "../Images/ImageStyle";

import { PasswordComponents } from "../components/PasswordComponents";
export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emaildHandler = (text) => setEmail(text);

  const changeFocusedName = () => {
    setIsFocusName(!isFocusName);
  };
  const changeFocusedPass = () => {
    setIsFocusPass(!isFocusPass);
  };
  const changeFocusedEmail = () => {
    setIsFocusEmail(!isFocusEmail);
  };
  const onLogin = () => {
    console.log({ name, password, email });
  };

  const selectImage = async () => {
    if (imageSource) {
      setImageSource(null);
      return;
    }
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      console.log("Дозвіл на доступ до галереї відхилено");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setImageSource({ uri: result.assets[0].uri });
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image source={require("../Images/backgo.png")} style={cssImg.loginImage} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={css.div}>
            <View>
              {imageSource ? (
                <Image source={imageSource} style={{ width: 200, height: 200 }} />
              ) : (
                <Image source={require("../Images/NoAvatar.png")} />
              )}
              <Button title="Вибрати фото" onPress={selectImage} />
            </View>

            <View style={css.logForm}>
              <Text style={css.titlePage}>Реєстрація</Text>
              <TextInput
                onFocus={changeFocusedName}
                onBlur={changeFocusedName}
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                style={[css.input, isFocusName && css.inputFocused]}
              />
              <TextInput
                onFocus={changeFocusedEmail}
                onBlur={changeFocusedEmail}
                value={email}
                onChangeText={emaildHandler}
                placeholder="Email address"
                style={[css.input, isFocusEmail && css.inputFocused]}
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
              <Text style={css.textLogBtn}>Зареєстуватись</Text>
            </Pressable>
            <View style={css.didntHaveAcc}>
              <Text style={css.textSignUp}>Вже є акаутн? </Text>
              <Pressable>
                <Text style={css.textSignUpBtn}>Увійти</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
