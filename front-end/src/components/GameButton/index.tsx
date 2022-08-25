import { View } from "react-native";
import { GameButtonText, GamesButton } from "./styles";

interface GameButtonProps {
  active?: boolean;
  notActive?: boolean;
  type: string;
  color: string;
  onPress?: () => void;
}

const GameButton = ({ active, type, color, onPress }: GameButtonProps) => {
  return (
    <View>
      <GamesButton active={active} onPress={onPress} color={color}>
        <GameButtonText active={active} color={color}>
          {type}
        </GameButtonText>
      </GamesButton>
    </View>
  );
};

export default GameButton;
