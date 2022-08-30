import styled from "styled-components/native";

export const HeaderCartButtonContainer = styled.View`
  margin-right: 15px;
`;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 5px;
`;

export const CartItems = styled.Text`
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 16px;
`;
