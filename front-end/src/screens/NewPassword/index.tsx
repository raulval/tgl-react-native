import Ionicons from "@expo/vector-icons/Ionicons";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BackText,
  Error,
  FormMain,
  FormTitle,
  FormView,
  Input,
  SignUp,
  Submit,
  SubmitButton,
  SubmitText,
} from "components/Form/styles";
import Slogan from "components/Slogan";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Alert, View } from "react-native";
import { FormContainer } from "screens/Reset/styles";
import { auth } from "services/index";
import { IBodyAuth, Nav } from "shared/interfaces";
import * as yup from "yup";

const validation = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const NewPassword = () => {
  const { navigate } = useNavigation<Nav>();
  const { changePassword } = auth();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IBodyAuth>({
    resolver: yupResolver(validation),
  });

  const handleSubmitForm = async ({
    password,
    confirm_password,
  }: IBodyAuth) => {
    try {
      const response = await changePassword({ password, confirm_password });
      setLoading(true);
      Alert.alert("Success", "Password changed successfully");
      navigate("Login");
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
    navigate("Reset");
  };

  return (
    <FormContainer>
      <Slogan />
      <FormMain>
        <FormTitle>Change password</FormTitle>
        <FormView onSubmit={handleSubmit(handleSubmitForm)}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="New password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Error>{errors.password.message}</Error>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Confirm password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirm_password"
          />
          {errors.confirm_password && (
            <Error>{errors.confirm_password.message}</Error>
          )}

          <Submit className="submit-btn">
            <SubmitButton onPress={handleSubmit(handleSubmitForm)}>
              <SubmitText>
                Change <Ionicons name="arrow-forward" size={30} />
              </SubmitText>
            </SubmitButton>
          </Submit>
        </FormView>

        <SignUp className="signup-btn">
          <BackButton onPress={onPressBack}>
            <BackText>
              <Ionicons name="arrow-back" size={30} />
              Back
            </BackText>
          </BackButton>
        </SignUp>
      </FormMain>
    </FormContainer>
  );
};

export default NewPassword;
