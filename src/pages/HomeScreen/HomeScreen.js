import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogoutComponent } from "../../components/LogoutBtn";
import { useState } from "react";
import { CreatePost } from "../../components/CreatePost";
import { PostsComponent } from "../../components/PostsComponent";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  const [Tabs, setTabs] = useState(false);
  const [dataPosts, setDataPosts] = useState([]);
  const Post = () => {
    return (
      <View style={styles.postScreen}>
        <FlatList
          data={dataPosts}
          renderItem={({ item }) => {
            return <Text>{item.namePlace}</Text>;
          }}
        />
      </View>
    );
  };
  // console.log(dataPosts);
  const getDataPosts = (data) => {
    setDataPosts((prev) => [...prev, data]);
  };
  const Profile = () => {
    return (
      <View style={styles.postScreen}>
        <Text>Профіль</Text>
      </View>
    );
  };
  return (
    <View style={{ height: "100%" }}>
      <Tab.Navigator
        initialRouteName="Post"
        screenOptions={{
          tabBarStyle: { height: 98 },
          headerStyle: { height: 108 },
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        {Tabs ? (
          <Tab.Screen
            name="CreatePost"
            options={{
              title: "Створити публікацію",
              headerLeft: () => (
                <Pressable
                  onPress={() => {
                    setTabs(!Tabs);
                  }}
                >
                  <AntDesign name="arrowleft" size={20} />
                </Pressable>
              ),
              tabBarLabel: null,
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <Pressable style={styles.svgAdd} onPress={() => console.log("delete")}>
                  <AntDesign name="delete" size={26} color={"white"} />
                </Pressable>
              ),
            }}
          >
            {() => <CreatePost getDataPosts={getDataPosts} />}
          </Tab.Screen>
        ) : (
          <>
            <Tab.Screen
              name="Post"
              // component={Post}
              options={{
                title: "Публікації",
                tabBarLabel: null,
                tabBarShowLabel: false,
                headerRight: () => <LogoutComponent />,
                tabBarIcon: () => <SimpleLineIcons name="grid" color={"#212121"} size={20} />,
              }}
            >
              {() => <PostsComponent dataPosts={dataPosts} />}
            </Tab.Screen>

            <Tab.Screen
              name="Create"
              component={Post}
              options={{
                tabBarLabel: null,
                tabBarShowLabel: false,
                tabBarIcon: () => (
                  <Pressable
                    style={styles.svgAdd}
                    onPress={() => {
                      setTabs(!Tabs);
                    }}
                  >
                    <Ionicons name="add-sharp" size={26} color={"white"} />
                  </Pressable>
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                title: "Профіль",

                tabBarLabel: null,
                tabBarShowLabel: false,
                tabBarIcon: () => <AntDesign name="user" color={"#212121"} size={20} />,
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  svgAdd: {
    backgroundColor: "#FF6C00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  postScreen: {
    backgroundColor: "coral",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CreatePostScreen: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreen: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
