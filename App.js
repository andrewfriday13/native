import { LoginScreen } from "./src/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/RegistrationScreen/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "hermes-profile-transformer";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
AppRegistry.registerComponent(appName, () => App);
global.HermesInternal = true;

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
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registation" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
