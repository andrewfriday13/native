import { FlatList, View, Text, Image, StyleSheet } from "react-native";

export const PostsComponent = ({ dataPosts }) => {
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
                <Text>{JSON.stringify(item.location)}</Text>
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
