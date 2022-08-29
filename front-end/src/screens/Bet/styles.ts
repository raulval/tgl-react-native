import styled from "styled-components/native";

export const BetContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const MainContainer = styled.View`
  width: 85%;
  margin-top: 50px;
`;

export const MainTitle = styled.Text`
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.text300Italic};
  font-size: 24px;
`;

export const Bold = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
`;

export const ChooseGameText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 17px;
  color: ${(props) => props.theme.colors.secundary.text};
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const GamesView = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -15px;
`;

export const FillBetText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 17px;
  color: ${(props) => props.theme.colors.secundary.text};
  margin-top: 28px;
`;

export const GameDescription = styled.Text`
  margin-bottom: 27px;
  font-family: ${(props) => props.theme.fonts.text400Italic};
  font-size: 17px;
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const NumbersContainer = styled.View`
  padding-left: 8px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const CompleteGameButton = styled.TouchableOpacity`
  width: 164px;
  min-width: 80px;
  height: 52px;
  border: 1px solid ${(props) => props.theme.colors.secundary.main};
  border-radius: 10px;

  margin-right: 25px;
  align-items: center;
  justify-content: center;
`;

export const CompleteGameButtonText = styled.Text`
  padding-bottom: 3px;

  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 18px;
  color: ${(props) => props.theme.colors.secundary.main};
`;

export const ClearGameButton = styled.TouchableOpacity`
  width: 135px;
  min-width: 80px;
  height: 52px;
  border: 1px solid ${(props) => props.theme.colors.secundary.main};
  border-radius: 10px;

  margin-right: 25px;

  align-items: center;
  justify-content: center;
`;

export const ClearGameButtonText = styled.Text`
  padding-bottom: 3px;
  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 18px;

  color: ${(props) => props.theme.colors.secundary.main};
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: 325px;
  min-width: 100px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.secundary.main};
  border: 1px solid ${(props) => props.theme.colors.secundary.main};
  margin-bottom: 55px;

  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const AddToCartButtonText = styled.Text`
  padding-bottom: 3px;
  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 20px;
  color: #ffffff;
`;
