import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export const CreatePost = () => {
  const [getPhoto, setGetPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await getPhoto.takePictureAsync();
    setPhoto(photo.uri);
  };
  return (
    <>
      <View style={css.container}>
        <Camera style={css.camera} ref={setGetPhoto}>
          {photo && (
            <View>
              <Image source={{ uri: photo }} style={{ height: 200, width: 200 }} />
            </View>
          )}
          <TouchableOpacity onPress={takePhoto} style={css.iconCamera}>
            <MaterialIcons name="photo-camera" color={"#BDBDBD"} size={24} />
          </TouchableOpacity>
        </Camera>
        <Text>dsdfd</Text>
      </View>
    </>
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
