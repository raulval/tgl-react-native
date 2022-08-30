import { auth } from "services/index";
import { IBodyAuth } from "shared/interfaces";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Form, Slogan } from "components/index";
import { useState } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import { Nav } from "shared/interfaces";
import { FormContainer } from "./styles";

const Reset = () => {
  const { reset } = auth();
  const { navigate } = useNavigation<Nav>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async ({ email }: IBodyAuth) => {
    try {
      const response = await reset({ email });
      setLoading(true);
      await AsyncStorage.setItem("resetToken", response.data.token);
      navigate("NewPassword");
    } catch (error: any) {
      Alert.alert(error.response.data.message);
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

  const onPressBack = () => {
    navigate("Login");
  };

  return (
    <FormContainer>
      <Slogan />
      <Form reset onSubmit={handleSubmit} onPressBack={onPressBack} />
    </FormContainer>
  );
};

export default Reset;
