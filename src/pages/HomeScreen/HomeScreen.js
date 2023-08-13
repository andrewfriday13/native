import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogoutComponent } from "../../components/LogoutBtn";
import { useState } from "react";
import { CreatePost } from "../../components/CreatePost";
import { PostsComponent } from "../../components/PostsComponent";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  const navigation = useNavigation();

  const [Tabs, setTabs] = useState(false);
  const [dataPosts, setDataPosts] = useState([]);

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
                    console.log(Tabs);
                    setTabs(!Tabs);
                  }}
                >
                  <AntDesign name="arrowleft" size={20} />
                </Pressable>
              ),
              tabBarLabel: null,
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <Pressable style={styles.svgAdd}>
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
              component={CreatePost}
              options={{
                title: "Створити публікацію",
                tabBarLabel: null,
                tabBarShowLabel: false,
                tabBarIcon: () => (
                  <Pressable
                    style={{
                      width: "100%",
                      height: "100%",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => setTabs(!Tabs)}
                  >
                    <View style={styles.svgAdd}>
                      <Ionicons name="add-sharp" size={26} color={"white"} />
                    </View>
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
        {/* зробити ще один екран  для коментарів і при натиску на коментс переводити на цей екран */}
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
