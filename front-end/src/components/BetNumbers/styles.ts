import styled from "styled-components/native";

interface BetNumbersProps {
  active: boolean;
}

export const NumberButton = styled.Pressable`
  width: 52px;
  height: 52px;

  margin-right: 12px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: center;

  background-color: ${(props: BetNumbersProps) =>
    props.active ? "rgba(0, 0, 0, 0.7)" : "#adc0c4"};
  border-radius: 100px;
`;

export const NumberButtonText = styled.Text`
  padding-bottom: 3px;
  font-family: ${(props) => props.theme.fonts.title600};
  font-size: 20px;
  color: #ffffff;
`;
