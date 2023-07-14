import { LoginScreen } from "./src/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return <LoginScreen />;
}
