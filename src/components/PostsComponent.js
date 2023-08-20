import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Posts } from "./Post";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const MainStack = createStackNavigator();

export const PostsComponent = ({ dataPosts }) => {
  const route = useRoute();
  const nav = useNavigation();
  const Comment = () => {
    console.log(route.name);
    return (
      <View>
        <Text>Привіт</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Press");
            // nav.navigate("Home");
            // navigation.navigate("Home");
          }}
        >
          <Text>назад</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <NavigationContainer independent={true}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Possst"
          options={{
            headerShown: false,
            title: "Possst",
          }}
        >
          {() => <Posts dataPosts={dataPosts} />}
        </MainStack.Screen>
        <MainStack.Screen name="Comment" component={Comment} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
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
