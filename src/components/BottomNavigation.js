import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogoutComponent } from "./LogoutBtn";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const route = useRoute();

  const Feed = () => {
    return (
      <View style={{ backgroundColor: "coral", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Публікаціїї</Text>
      </View>
    );
  };
  const createPost = () => {
    // console.log(name);

    return (
      <View style={{ backgroundColor: "blue", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Створити</Text>
      </View>
    );
  };
  const Profile = () => {
    console.log(route.name);

    return (
      <View style={{ backgroundColor: "green", flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <Tab.Screen
        name="Публікаціїї"
        component={Feed}
        options={{
          tabBarLabel: null,
          tabBarShowLabel: false,
          headerRight: () => <LogoutComponent />,
          tabBarIcon: () => <SimpleLineIcons name="grid" color={"#212121"} size={20} />,
        }}
      />
      <Tab.Screen
        name="Створити публікацію"
        component={createPost}
        options={{
          tabBarLabel: null,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: "#FF6C00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                width: 70,
                height: 40,
              }}
            >
              <Ionicons name="add-sharp" size={26} color={"white"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: null,
          tabBarShowLabel: false,
          tabBarIcon: () => <AntDesign name="user" color={"#212121"} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};
