import styled from "styled-components/native";

export const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 24px;
`;
