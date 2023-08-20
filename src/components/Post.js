import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export const Posts = ({ dataPosts }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
      <FlatList
        data={dataPosts}
        renderItem={({ item }) => {
          return (
            <View style={css.container}>
              <View style={css.post}>
                <Image source={{ uri: item.photo }} style={css.postImage} />
                <Text>{item.namePlace}</Text>
                <Text>Location</Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log(route);
                    navigation.navigate("Comment");
                  }}
                >
                  <Text>Coments</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const css = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  post: {
    marginBottom: 30,
  },
  postImage: {
    height: 240,
    width: "100%",
  },
});
