import { useNavigation } from "@react-navigation/native";
import Form from "components/Form";
import Slogan from "components/Slogan";
import { useState } from "react";
import { ActivityIndicator, Alert, ScrollView, View } from "react-native";
import user from "services/user";
import { IBodyAuth, Nav } from "shared/interfaces";
import { SignUpContainer } from "./styles";

const SignUp = () => {
  const { navigate } = useNavigation<Nav>();
  const { signup } = user();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async ({ name, email, password }: IBodyAuth) => {
    try {
      setLoading(true);
      const response = await signup({ name, email, password });
      Alert.alert("User created successfully");
      navigate("Login");
    } catch (error: any) {
      if (error.response.data.message) {
        Alert.alert(error.response.data.message);
      } else if (error.response.data.error.message) {
        Alert.alert(error.response.data.error.message);
      } else {
        Alert.alert("Something went wrong");
        console.error(error);
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

  const onPressBack = () => {
    navigate("Login");
  };

  return (
    <ScrollView>
      <SignUpContainer>
        <Slogan />
        <Form signup onSubmit={handleSubmit} onPressBack={onPressBack} />
      </SignUpContainer>
    </ScrollView>
  );
};

export default SignUp;
