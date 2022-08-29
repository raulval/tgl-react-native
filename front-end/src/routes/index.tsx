import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/index";
import { AppAuth, AppCart } from "./app.routes";

export function Routes() {
  const [isUser, setIsUser] = useState<boolean>(false);

  AsyncStorage.getItem("userToken").then((token) => {
    if (token) {
      setIsUser(true);
    }
  });

  if (isUser) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppCart />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppAuth />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
