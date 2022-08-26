import styled from "styled-components/native";

export const AccountContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const AccountCard = styled.View`
  width: 90%;
  /* height: 80%; */
  /* min-height: 700px; */

  margin-top: 40px;
  padding-top: 50px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
`;

export const AccountPictureWrapper = styled.View`
  position: absolute;
  bottom: 85%
  width: 200px;
  height: 200px;
  border: 2px solid ${(props) => props.theme.colors.primary.text};
  background-color: white;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const AccountPicture = styled.Image`
  width: 150px;
  height: 150px;
`;

export const NameText = styled.Text`
  padding-top: 85px;
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
`;
export const EmailText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary.text};
`;

export const EditText = styled.Text`
  margin-top: 50px;

  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 17px;
  color: ${(props) => props.theme.colors.primary.text};
  margin-bottom: 20px;
`;

export const FormEdit = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const NameInput = styled.TextInput`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  border-top-width: 2px;
  border-top-color: #ebebeb;
  border-bottom-width: 2px;
  border-bottom-color: #ebebeb;
  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 17px;
`;

export const EmailInput = styled.TextInput`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  border-bottom-width: 2px;
  border-bottom-color: #ebebeb;
  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 17px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.primary.main};
`;

export const SubmitButtonText = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.primary.main};
`;
