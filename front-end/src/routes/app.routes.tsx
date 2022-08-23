import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reset from "screens/Reset";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      // screenOptions={{  }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Reset" component={Reset} />
    </Navigator>
  );
}
