import { LoginScreen } from "./src/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/RegistrationScreen/RegistrationScreen";
import AvatarPicker from "./src/components/PhotoProfile";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <LoginScreen /> */}
      <RegistrationScreen />
    </>
  );
}
