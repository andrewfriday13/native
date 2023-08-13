import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Posts } from "./Post";

const MainStack = createStackNavigator();

export const PostsComponent = ({ dataPosts }) => {
  const navigation = useNavigation();

  const Comment = () => {
    return (
      <View>
        <Text>Привіт</Text>
      </View>
    );
  };
  return (
    <NavigationContainer independent={true}>
      <MainStack.Navigator>
        <MainStack.Screen name="Post" options={{ headerShown: false }}>
          {() => <Posts dataPosts={dataPosts} />}
        </MainStack.Screen>
        <MainStack.Screen component={Comment} name="Comment" options={{ headerShown: false }} />
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
