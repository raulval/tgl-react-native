import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "screens/Home";
import Login from "screens/Login";
import NewPassword from "screens/NewPassword";
import Reset from "screens/Reset";
import SignUp from "screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Reset" component={Reset} />
      <Screen name="NewPassword" component={NewPassword} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
