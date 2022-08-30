import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";

import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Cart, HeaderCartButton } from "components/index";
import {
  Account,
  Bet,
  Home,
  Login,
  NewPassword,
  Reset,
  SignUp,
} from "screens/index";
import { NavReset } from "shared/interfaces";
import { logoutCart } from "store/cartSlice";
import { logout } from "store/userSlice";
import Theme from "styles/theme";

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

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

export function AppBets() {
  const dispatch = useDispatch();
  const { reset } = useNavigation<NavReset>();

  return (
    <LeftDrawer.Navigator
      id="left"
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "left",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          fontFamily: Theme.fonts.title600,
        },
        drawerActiveBackgroundColor: Theme.colors.primary.main,
        headerRight: () => <HeaderCartButton />,
      }}
    >
      <LeftDrawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <Ionicons name="home" size={26} />,
        }}
      />
      <LeftDrawer.Screen
        name="Profile"
        component={Account}
        options={{
          drawerIcon: () => <Ionicons name="person" size={26} />,
        }}
      />
      <LeftDrawer.Screen
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
            dispatch(logoutCart());
          });
          return <AppAuth />;
        }}
      </LeftDrawer.Screen>
      <LeftDrawer.Screen
        name="New Bet"
        component={Bet}
        options={{
          drawerLabel: () => null,
          title: undefined,
          drawerActiveBackgroundColor: "white",
        }}
      />
      <LeftDrawer.Screen
        name="AppAuth"
        component={AppAuth}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: undefined,
        }}
      />
      <LeftDrawer.Screen
        name="AppCart"
        component={AppCart}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: undefined,
        }}
      />
    </LeftDrawer.Navigator>
  );
}

export function AppCart() {
  return (
    <RightDrawer.Navigator
      initialRouteName="HomeDrawer"
      id="cart"
      drawerContent={() => <Cart />}
      screenOptions={{ drawerPosition: "right", headerShown: false }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={AppBets} />
    </RightDrawer.Navigator>
  );
}
