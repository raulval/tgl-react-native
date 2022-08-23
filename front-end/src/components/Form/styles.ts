import styled from "styled-components/native";

export const FormMain = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.primary.text};
  margin-bottom: 26px;
`;

export const FormView = styled.View`
  display: flex;
  flex-direction: column;
  width: 352px;
  min-height: auto;
  background-color: #fff;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 14px;
`;

export const Input = styled.TextInput`
  height: 80px;
  padding-left: 30px;
  border-bottom-width: 2px;
  border-bottom-color: #ebebeb;
  outline: none;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 17px;
`;

export const Error = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 16px;
  color: #d5423f;
  margin-left: 20px;
`;

export const ForgotPassword = styled.View`
  margin-top: 27px;
  margin-right: 27px;
  align-items: flex-end;
`;

export const ForgotPasswordButton = styled.Pressable``;

export const ForgotPasswordText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400Italic};
  font-size: 17px;
  color: #c1c1c1;
`;

export const Submit = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.Pressable`
  border: none;
  transition: all 0.2s;
`;

export const SubmitText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.primary.main};
`;

export const SignUp = styled.View`
  margin-top: 20px;
`;

export const SignUpButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.primary.text};
`;

export const BackButton = styled.Pressable`
  align-items: center;
  justify-content: center;
`;

export const BackText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.primary.text};
`;
