import styled from "styled-components/native";

export const HeaderCartButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const CartButton = styled.TouchableOpacity`
  margin-right: 5px;
`;

export const CartItems = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 16px;
`;
