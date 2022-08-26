import Ionicons from "@expo/vector-icons/Ionicons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "components/Form/styles";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { user } from "services/index";
import { IBodyEditUserInfo } from "shared/interfaces";
import { setUser } from "store/userSlice";
import * as yup from "yup";
import {
  AccountCard,
  AccountContainer,
  AccountPicture,
  AccountPictureWrapper,
  EditText,
  EmailInput,
  EmailText,
  FormEdit,
  NameInput,
  NameText,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

const validation = yup.object({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  email: yup.string().required("Email is required").email("Invalid Email"),
});

const Account = () => {
  const { editUserInfo } = user();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => state.user);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IBodyEditUserInfo>({
    resolver: yupResolver(validation),
  });

  const onSubmitForm = async ({ name, email }: IBodyEditUserInfo) => {
    try {
      const response = await editUserInfo({ name, email });
      dispatch(setUser(response.data));
      Alert.alert("Success", "Your profile has been updated");
    } catch (error: any) {
      Alert.alert(error.response.data.errors[0].message);
    }
  };

  return (
    <AccountContainer>
      <AccountCard>
        <AccountPictureWrapper>
          <AccountPicture source={require("../../assets/profile.png")} />
        </AccountPictureWrapper>
        <NameText>
          {userData.name ? userData.name : userData.user.name}
        </NameText>
        <EmailText>
          {userData.email ? userData.email : userData.user.email}
        </EmailText>
        {/* <Separator /> */}
        <EditText>Edit your informations</EditText>
        <FormEdit>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <NameInput
                placeholder={userData.name ? userData.name : userData.user.name}
                placeholderTextColor="#9d9d9d"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && <Error>{errors.name.message}</Error>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <EmailInput
                placeholder={
                  userData.email ? userData.email : userData.user.email
                }
                placeholderTextColor="#9d9d9d"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Error>{errors.email.message}</Error>}
          <SubmitButton onPress={handleSubmit(onSubmitForm)}>
            <SubmitButtonText>
              Edit <Ionicons name="arrow-forward" size={30} />
            </SubmitButtonText>
          </SubmitButton>
        </FormEdit>
      </AccountCard>
    </AccountContainer>
  );
};

export default Account;
