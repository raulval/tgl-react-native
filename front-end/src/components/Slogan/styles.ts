import styled from "styled-components/native";

export const SloganContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 6%;
`;

export const FirstTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary.text};
  text-align: center;
  inline-size: 320px;
  overflow-wrap: break-word;
`;

export const CenterView = styled.View`
  width: 100px;
  height: 39px;
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 25px 0 15px 0;
`;

export const CenterText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 18px;
  color: #ffffff;
`;

export const SecondTitle = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
`;
