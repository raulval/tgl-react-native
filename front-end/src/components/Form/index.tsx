import Ionicons from "@expo/vector-icons/Ionicons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { IBodyAuth } from "shared/interfaces";
import * as yup from "yup";
import {
  BackButton,
  BackText,
  Error,
  ForgotPassword,
  ForgotPasswordButton,
  ForgotPasswordText,
  FormMain,
  FormTitle,
  FormView,
  Input,
  SignUp,
  SignUpButton,
  SignUpText,
  Submit,
  SubmitButton,
  SubmitText,
} from "./styles";

interface FormProps {
  login?: boolean;
  reset?: boolean;
  signup?: boolean;
  onSubmit: ({ email, password, name }: IBodyAuth) => void;
  onPressSignUp?: () => void;
  onPressBack?: () => void;
  onPressForgotPassword?: () => void;
}

const validationLogin = yup.object({
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup.string().required("Password is required"),
});

const validationReset = yup.object({
  email: yup.string().required("Email is required").email("Invalid Email"),
});

const validationSignUp = yup.object({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Form = (props: FormProps) => {
  let validation;

  if (props.login) {
    validation = validationLogin;
  } else if (props.reset) {
    validation = validationReset;
  } else {
    validation = validationSignUp;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IBodyAuth>({
    resolver: yupResolver(validation),
  });

  const onPress = () => {
    console.log("Clicou");
  };

  return (
    <FormMain>
      {props.login && <FormTitle>Authentication</FormTitle>}
      {props.reset && <FormTitle>Reset password</FormTitle>}
      {props.signup && <FormTitle>Registration</FormTitle>}
      <FormView>
        {props.signup && (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Name"
                placeholderTextColor="#9d9d9d"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
        )}
        {errors.name && <Error>{errors.name.message}</Error>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="E-mail"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        {props.login || props.signup ? (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
        ) : null}
        {errors.password && <Error>{errors.password.message}</Error>}

        {props.login && (
          <ForgotPassword>
            <ForgotPasswordButton onPress={props.onPressForgotPassword}>
              <ForgotPasswordText>I forgot my password</ForgotPasswordText>
            </ForgotPasswordButton>
          </ForgotPassword>
        )}

        <Submit className="submit-btn">
          {props.login && (
            <SubmitButton onPress={handleSubmit(props.onSubmit)}>
              <SubmitText>
                Log In <Ionicons name="arrow-forward" size={30} />
              </SubmitText>
            </SubmitButton>
          )}
          {props.reset && (
            <SubmitButton onPress={handleSubmit(props.onSubmit)}>
              <SubmitText>
                Send link <Ionicons name="arrow-forward" size={30} />
              </SubmitText>
            </SubmitButton>
          )}
          {props.signup && (
            <SubmitButton onPress={handleSubmit(props.onSubmit)}>
              <SubmitText>
                Register <Ionicons name="arrow-forward" size={30} />
              </SubmitText>
            </SubmitButton>
          )}
        </Submit>
      </FormView>

      <SignUp className="signup-btn">
        {props.login ? (
          <SignUpButton onPress={props.onPressSignUp}>
            <SignUpText>
              Sign Up <Ionicons name="arrow-forward" size={30} />
            </SignUpText>
          </SignUpButton>
        ) : (
          <BackButton onPress={props.onPressBack}>
            <BackText>
              <Ionicons name="arrow-back" size={30} />
              Back
            </BackText>
          </BackButton>
        )}
      </SignUp>
    </FormMain>
  );
};

export default Form;
