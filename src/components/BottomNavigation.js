import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogoutComponent } from "./LogoutBtn";
import { useState } from "react";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const [Tabs, setTabs] = useState(true);

  const Post = () => {
    return (
      <View style={styles.postScreen}>
        <Text>Публікаціїї</Text>
      </View>
    );
  };
  const createPost = () => {
    return (
      <View style={styles.createPostScreen}>
        <Text>Створити</Text>
      </View>
    );
  };
  const Profile = () => {
    return (
      <View style={styles.postScreen}>
        <Text>Профіль</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Публікаціїї"
      screenOptions={{
        tabBarStyle: { height: 98 },
        headerStyle: { height: 108 },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      {Tabs && (
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            title: "Публікації",

            tabBarLabel: null,
            tabBarShowLabel: false,
            headerRight: () => <LogoutComponent />,
            tabBarIcon: () => <SimpleLineIcons name="grid" color={"#212121"} size={20} />,
          }}
        />
      )}
      <Tab.Screen
        name="Create"
        component={createPost}
        options={{
          title: "Створити публікацію",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                setTabs(true);
              }}
            >
              <AntDesign name="arrowleft" size={20} />
            </Pressable>
          ),
          tabBarLabel: null,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Pressable
              style={styles.svgAdd}
              onPress={() => {
                setTabs(false);
              }}
            >
              <Ionicons name="add-sharp" size={26} color={"white"} />
            </Pressable>
          ),
        }}
      />
      {Tabs && (
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
      )}
    </Tab.Navigator>
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
  createPostScreen: {
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
