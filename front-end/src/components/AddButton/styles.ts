import styled from "styled-components/native";
import Theme from "styles/theme";

export const AddButtonContainer = styled.View`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => Theme.colors.primary.main};
  justify-content: center;
  align-items: center;
  elevation: 2;
`;

// export const AddButtonText = styled.Text`
//   text-align: center;
//   color: white;
//   font-family: ${(props) => props.theme.fonts.title600Italic};
//   font-size: 18px;
//   padding-bottom: 5px;
// `;
