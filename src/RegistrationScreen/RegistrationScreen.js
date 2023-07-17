// import { useState } from "react";
// import {
//   View,
//   TextInput,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Text,
//   Pressable,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";

// import { css } from "./RegistrationScreenStyle";
// import { cssImg } from "../Images/ImageStyle";

// import { PasswordComponents } from "../components/PasswordComponents";
// export const RegistrationScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isFocusName, setIsFocusName] = useState(false);
//   const [isFocusPass, setIsFocusPass] = useState(false);
//   const [isFocusEmail, setIsFocusEmail] = useState(false);

//   const nameHandler = (text) => setName(text);
//   const passwordHandler = (text) => setPassword(text);
//   const emaildHandler = (text) => setEmail(text);

//   const changeFocusedName = () => {
//     setIsFocusName(!isFocusName);
//   };
//   const changeFocusedPass = () => {
//     setIsFocusPass(!isFocusPass);
//   };
//   const changeFocusedEmail = () => {
//     setIsFocusEmail(!isFocusEmail);
//   };
//   const onLogin = () => {
//     console.log({ name, password, email });
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View>
//         <Image source={require("../Images/backgo.png")} style={cssImg.loginImage} />
//         <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
//           <View style={css.div}>
//             <View style={css.logForm}>
//               <Text style={css.titlePage}>Реєстрація</Text>
//               <TextInput
//                 onFocus={changeFocusedName}
//                 onBlur={changeFocusedName}
//                 value={name}
//                 onChangeText={nameHandler}
//                 placeholder="Username"
//                 style={[css.input, isFocusName && css.inputFocused]}
//               />
//               <TextInput
//                 onFocus={changeFocusedEmail}
//                 onBlur={changeFocusedEmail}
//                 value={email}
//                 onChangeText={emaildHandler}
//                 placeholder="Email address"
//                 style={[css.input, isFocusEmail && css.inputFocused]}
//               />
//               <PasswordComponents
//                 onFocus={changeFocusedPass}
//                 onBlur={changeFocusedPass}
//                 value={password}
//                 onChangeText={passwordHandler}
//                 placeholder="Password"
//                 style={[css.input, isFocusPass && css.inputFocused]}
//               />
//             </View>
//             <Pressable onPressIn={onLogin} style={css.logBtn}>
//               <Text style={css.textLogBtn}>Зареєстуватись</Text>
//             </Pressable>
//             <View style={css.didntHaveAcc}>
//               <Text style={css.textSignUp}>Вже є акаутн? </Text>
//               <Pressable>
//                 <Text style={css.textSignUpBtn}>Увійти</Text>
//               </Pressable>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

import React, { useState } from "react";
import { View, TextInput, Image, Button, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

export const RegistrationScreen = () => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [username, setUsername] = useState("");
  // Додайте інші поля реєстрації за необхідністю

  const handleChooseAvatar = () => {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.uri) {
        setAvatarSource(response);
      }
    });
  };

  const handleRegistration = () => {
    // Ваш код для обробки реєстрації, включаючи дані з поля username та обрану аватарку з avatarSource
    console.log("Username:", username);
    console.log("Avatar Source:", avatarSource);
    // Додайте код для відправки даних на сервер або для локального зберігання
  };

  return (
    <View style={styles.container}>
      {avatarSource && <Image source={{ uri: avatarSource.uri }} style={styles.avatar} />}
      <Button title="Choose Avatar" onPress={handleChooseAvatar} />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Username"
      />
      {/* Додайте інші поля реєстрації за необхідністю */}
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
