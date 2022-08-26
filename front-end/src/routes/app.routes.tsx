import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";

import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Account from "screens/Account";
import Home from "screens/Home";
import Login from "screens/Login";
import NewPassword from "screens/NewPassword";
import Reset from "screens/Reset";
import SignUp from "screens/SignUp";
import { NavReset } from "shared/interfaces";
import { logout } from "store/userSlice";
import Theme from "styles/theme";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export function AppBets() {
  const dispatch = useDispatch();
  const { reset } = useNavigation<NavReset>();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          fontFamily: Theme.fonts.title600,
        },
        drawerActiveBackgroundColor: Theme.colors.primary.main,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <Ionicons name="home" size={26} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Account}
        options={{
          drawerIcon: () => <Ionicons name="person" size={26} />,
        }}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerIcon: () => <Ionicons name="log-out" size={28} />,
          headerShown: false,
        }}
      >
        {() => {
          AsyncStorage.removeItem("userToken").then(() => {
            reset({
              routes: [{ name: "AppAuth" }],
            });
            dispatch(logout());
          });
          return <AppAuth />;
        }}
      </Drawer.Screen>
      <Drawer.Screen
        name="AppAuth"
        component={AppAuth}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: undefined,
        }}
      />
    </Drawer.Navigator>
  );
}

export function AppAuth() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="AppBets" component={AppBets} />
    </Stack.Navigator>
  );
}
