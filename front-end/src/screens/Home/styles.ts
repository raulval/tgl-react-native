import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HomeHeader = styled.View`
  min-width: 0;
  width: 100%;
  margin-top: 74px;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RecentGames = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;

  margin-bottom: 20px;
`;

export const FiltersText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400Italic};
  font-size: 17px;
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const BetsPlayedContainer = styled.SafeAreaView`
  width: 100%;
  height: 65%;
  align-items: center;
  margin-top: 35px;
`;

export const NoBet = styled.Text`
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 20px;
`;
