import { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { SvgXml } from "react-native-svg";

import { css } from "./RegistrationScreenStyle";
import { cssImg } from "../Images/ImageStyle";

import { PasswordComponents } from "../components/PasswordComponents";
import { addSvg, removeSvg } from "../Images/Svg";

export const RegistrationScreen = ({ navigation }) => {
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
  const validate = (name, email, pass) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validateEmail = emailRegex.test(email);
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const lengthName = name.length >= 3;
    const validatePassword = regexPass.test(pass);

    if (!lengthName) {
      return Alert.alert("Не допустима довжина", "Довжині імені не менше 3 символів", [
        {
          text: "OK",
        },
      ]);
    } else if (!validateEmail) {
      return Alert.alert("Не коректний Email", "Приклад: examle@mail.com", [
        {
          text: "OK",
        },
      ]);
    } else if (!validatePassword) {
      return Alert.alert("Не коректний Пароль", "шось не вірно ", [
        {
          text: "OK",
        },
      ]);
    }
  };
  const onLogin = () => {
    validate(name, email, password);
    console.log("success");
  };

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
  const removeImageSource = () => {
    setImageSource(null);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image source={require("../Images/backgo.png")} style={cssImg.loginImage} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={css.div}>
            <View style={css.avatar}>
              {imageSource ? (
                <Image source={imageSource} style={css.regPhoto} />
              ) : (
                <Image source={require("../Images/NoAvatar.png")} style={css.regPhoto} />
              )}
              <TouchableOpacity style={css.btnSelectImage}>
                {!imageSource ? (
                  <SvgXml xml={addSvg} onPress={selectImage} />
                ) : (
                  <SvgXml xml={removeSvg} onPress={removeImageSource} />
                )}
              </TouchableOpacity>
            </View>

            <View style={css.regForm}>
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
              <Text style={css.textSignUp}>Вже є акаунт? </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={css.textSignUpBtn}>Увійти</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
