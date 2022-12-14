import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Form, Slogan } from "components/index";
import { useState } from "react";
import { ActivityIndicator, Alert, ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
import { auth } from "services/index";
import { IBodyAuth, Nav } from "shared/interfaces";
import { setUser } from "store/userSlice";
import { LoginContainer } from "./styles";

const Login = () => {
  const { navigate } = useNavigation<Nav>();
  const dispatch = useDispatch();
  const { login } = auth();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async ({ email, password }: IBodyAuth) => {
    try {
      const response = await login({ email, password });
      setLoading(true);
      dispatch(setUser(response.data));
      await AsyncStorage.setItem("userToken", response.data.token.token);
      navigate("AppCart");
    } catch (error: any) {
      if (error.response.data.message) {
        Alert.alert(error.response.data.message);
      } else {
        Alert.alert("Error", "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const onPressSignUp = () => {
    navigate("SignUp");
  };

  const onPressForgotPassword = () => {
    navigate("Reset");
  };

  return (
    <ScrollView>
      <LoginContainer>
        <Slogan />
        <Form
          login
          onSubmit={handleSubmit}
          onPressSignUp={onPressSignUp}
          onPressForgotPassword={onPressForgotPassword}
        />
      </LoginContainer>
    </ScrollView>
  );
};

export default Login;
