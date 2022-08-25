import styled from "styled-components/native";

interface ColorProps {
  color: string;
}

export const BetsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 35px;

  justify-content: center;
`;

export const Separator = styled.View`
  width: 6px;
  min-height: 94px;
  background-color: ${(props: ColorProps) => props.color};
  border-radius: 100px;
  margin-right: 20px;
`;

export const BetsWrapper = styled.View`
  flex-direction: column;
`;

export const BetNumbers = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 20px;
  color: ${(props) => props.theme.colors.secundary.text};
  margin-bottom: 15px;

  /* overflow-wrap: break-word; */

  width: 215px;
`;

export const BetDateAndPrice: any = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: 17px;
  color: ${(props) => props.theme.colors.secundary.text};
  margin-bottom: 11px;
`;

export const BetGameType = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 20px;
  color: ${(props: ColorProps) => props.color};
`;
