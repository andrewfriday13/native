import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Pressable } from "react-native";
import { Camera, CameraType } from "expo-camera";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export const CreatePost = ({ getDataPosts }) => {
  const [getPhoto, setGetPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [data, setData] = useState([]);

  const [namePlace, setNamePlace] = useState("");
  const [location, setLocation] = useState("");
  const takePhoto = async () => {
    const photo = await getPhoto.takePictureAsync();
    setPhoto(photo.uri);
  };
  const updateData = () => {
    getDataPosts(data);
  };
  const nameHandler = (text) => setNamePlace(text);

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
      <Text>dsdfd</Text>

      <TextInput value={namePlace} onChangeText={nameHandler} placeholder="Назва" />
      <TextInput value={namePlace} onChangeText={nameHandler} placeholder="Локація" />
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
    flex: 1,
  },
});
