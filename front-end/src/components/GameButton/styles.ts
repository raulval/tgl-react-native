import styled from "styled-components/native";

interface ColorProps {
  active?: boolean;
  color: string;
}

export const GamesButton = styled.Pressable<ColorProps>`
  width: 95px;
  height: 35px;
  background-color: ${({ color, active }) => (active ? color : "#ffffff")};
  border: 2px solid ${(props) => props.color};
  border-radius: 100px;
  margin-left: 6px;
  justify-content: center;
  margin-bottom: 8px;
`;

export const GameButtonText = styled.Text<ColorProps>`
  text-align: center;
  padding-bottom: 2px;
  color: ${(props) => (props.active ? "#ffffff" : props.color)};
  font-family: ${(props) => props.theme.fonts.title600Italic};
  font-size: 14px;
`;
