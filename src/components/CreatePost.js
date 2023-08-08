import { StyleSheet, Text, View, Platform, Alert, TouchableOpacity, TextInput, Image, Pressable } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import Device from "expo-device";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export const CreatePost = ({ getDataPosts }) => {
  const [getPhoto, setGetPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const [namePlace, setNamePlace] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const nameHandler = (text) => setNamePlace(text);
  const placeHandler = (text) => setLocation(text);

  const takePhoto = async () => {
    const photo = await getPhoto.takePictureAsync();
    setPhoto(photo.uri);
    if (Platform.OS === "android" && !Device.isDevice) {
      setErrorMsg("Oops, this will not work on Snack in an Android Emulator. Try it on your device!");
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  const updateData = () => {
    if (!namePlace || !location || !photo) {
      return Alert.alert("Помилка", "Заповіть всі поля");
    }
    getDataPosts({
      photo,
      namePlace,
      location,
    });
    setNamePlace("");
    setLocation("");
    //   if (photo || namePlace || location) {
    //     setIsDisabled(!true);
    //   }
  };

  return (
    <View style={css.container}>
      {photo ? (
        <View>
          <Image source={{ uri: photo }} style={{ height: 240, width: "100%" }} />
        </View>
      ) : (
        <Camera type={type} style={css.camera} ref={setGetPhoto}>
          <TouchableOpacity onPress={takePhoto} style={css.iconCamera}>
            <MaterialIcons name="photo-camera" color={"#BDBDBD"} size={24} />
          </TouchableOpacity>
        </Camera>
      )}
      <Text>Завантажте фото </Text>

      <TextInput value={namePlace} onChangeText={nameHandler} placeholder="Назва" />
      <TextInput value={JSON.stringify(location)} onChangeText={placeHandler} placeholder="Локація" />
      <TouchableOpacity onPress={updateData}>
        <Text>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};
const css = StyleSheet.create({
  camera: {
    height: 240,
  },
  iconCamera: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    width: 60,
    height: 60,
    top: "50%",
    left: "50%",
    marginTop: -30,
    marginLeft: -30,
    borderRadius: 30,
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
