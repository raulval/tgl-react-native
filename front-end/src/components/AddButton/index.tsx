import Ionicons from "@expo/vector-icons/Ionicons";
import { AddButtonContainer, Button } from "./styles";

interface Props {
  onPress: () => void;
}

const AddButton = ({ onPress }: Props) => {
  return (
    <AddButtonContainer>
      <Button onPress={onPress}>
        <Ionicons name="add" size={36} color="white" />
      </Button>
    </AddButtonContainer>
  );
};

export default AddButton;
