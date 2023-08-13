import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/pages/HomeScreen/HomeScreen";
import { Auth } from "./src/pages/auth/Auth";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: false }}>
        <MainStack.Screen options={{ headerShown: false }} name="Auth" component={Auth} />
        <MainStack.Screen
          options={{
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(0, 0, 0, 0.3)",
            },
            headerShown: false,
            headerLeft: null,
          }}
          name="Home"
          component={HomeScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
