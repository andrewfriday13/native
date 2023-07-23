import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogoutComponent } from "./LogoutBtn";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const Feed = () => {
    return (
      <View style={{ width: 100, backgroundColor: "coral", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Feed!</Text>
      </View>
    );
  };
  const Notifications = () => {
    return (
      <View>
        <Text>werwer</Text>
      </View>
    );
  };
  const Profile = () => {
    return (
      <View>
        <Text>werwer</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
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
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="grid" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Створити публікацію"
        component={Notifications}
        options={{
          tabBarLabel: null,
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size }) => <Ionicons name="add-sharp" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: null,
          tabBarShowLabel: false,
          tabBarIcon: () => <AntDesign name="user" color={"gray"} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
