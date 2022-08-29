import styled from "styled-components/native";

export const CartContainer = styled.View`
  flex-direction: column;
  margin-top: 42px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
`;

export const CartCard = styled.View`
  width: 280px;
  max-height: 600px;

  flex-direction: column;

  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
`;

export const CartTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 35px;
  margin-left: 19px;
`;

export const CartBetsContainer = styled.View`
  width: 317px;
  max-height: 400px;
  /* overflow-y: auto; */
`;

export const CartTotalPrice = styled.Text`
  margin-top: 40px;
  margin-bottom: 47px;
  margin-left: 19px;

  font-family: ${(props) => props.theme.fonts.text300};
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
`;

export const CartSaveButton = styled.TouchableOpacity`
  width: 300px;
  min-height: 96px;
  align-items: center;
  justify-content: center;

  background-color: #f4f4f4;
  border: 1px solid #e2e2e2;
`;

export const CartSaveButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 35px;
  color: ${(props) => props.theme.colors.secundary.main};
`;
