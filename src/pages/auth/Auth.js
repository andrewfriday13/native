import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./LoginScreen/LoginScreen";
const MainStack = createStackNavigator();

export const Auth = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen options={{ headerShown: false }} name="Registation" component={RegistrationScreen} />
      <MainStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
    </MainStack.Navigator>
  );
};
