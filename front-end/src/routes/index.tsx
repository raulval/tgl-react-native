import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
      {/* {user.id ? <AppRoutes /> : <SignIn />} */}
    </NavigationContainer>
  );
}
