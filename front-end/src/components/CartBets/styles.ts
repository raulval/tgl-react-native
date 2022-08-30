import styled from "styled-components/native";

interface ColorProps {
  color: string;
}

export const BetsContainer = styled.View`
  width: 95%;
  flex-direction: row;
  margin-bottom: 35px;
  margin-left: 17px;
  justify-content: center;
`;

export const DeleteBetContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DeleteBetButton = styled.TouchableOpacity`
  color: #888888;
  margin-right: 14px;
`;

export const DeleteBetButtonText = styled.Text``;

export const Separator = styled.View`
  min-width: 4px;
  min-height: 60px;
  background-color: ${(props: ColorProps) => props.color};
  border-radius: 100px;
  margin-right: 20px;
`;

export const BetsWrapper = styled.View`
  flex-direction: column;
  width: 240px;
`;

export const BetNumbers = styled.Text`
  width: 165px;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 15px;
  color: #868686;
  margin-bottom: 6px;
`;

export const TypePriceWrapper = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const BetGameType = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 16px;
  color: ${(props: ColorProps) => props.color};
  margin-right: 14px;
`;

export const BetPrice: any = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: 16px;
  color: #868686;
`;
