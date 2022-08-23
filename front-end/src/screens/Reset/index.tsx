import { auth } from "services/index";
import { IBodyAuth } from "shared/interfaces";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Form from "components/Form";
import Slogan from "components/Slogan";
import { Alert } from "react-native";
import { Nav } from "shared/interfaces";
import { FormContainer } from "./styles";

const Reset = () => {
  const { reset } = auth();
  const { navigate } = useNavigation<Nav>();

  const handleSubmit = async ({ email }: IBodyAuth) => {
    try {
      const response = await reset({ email });
      await AsyncStorage.setItem("resetToken", response.data.token);
      navigate("NewPassword");
    } catch (error: any) {
      Alert.alert(error.response.data.message);
    }
  };

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
