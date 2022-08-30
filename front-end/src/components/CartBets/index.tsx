import {
  BetGameType,
  BetNumbers,
  BetPrice,
  BetsContainer,
  BetsWrapper,
  DeleteBetButton,
  DeleteBetContainer,
  Separator,
  TypePriceWrapper,
} from "./styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import { ICartBets } from "shared/interfaces";
import { currencyFormat } from "shared/utils";
import Theme from "styles/theme";

interface BetsProps {
  data: ICartBets;
  onDelete: () => void;
}

const CartBets = (props: BetsProps) => {
  return (
    <BetsContainer>
      <DeleteBetContainer>
        <DeleteBetButton onPress={props.onDelete}>
          <Ionicons
            name="trash-outline"
            size={25}
            color={Theme.colors.primary.text}
          />
        </DeleteBetButton>
      </DeleteBetContainer>
      <Separator color={props.data.color} />
      <BetsWrapper>
        <BetNumbers>
          {props.data.numbers.toString().split(",").join(", ")}
        </BetNumbers>
        <TypePriceWrapper>
          <BetGameType color={props.data.color}>{props.data.type}</BetGameType>
          <BetPrice>R$ {currencyFormat(props.data.price)}</BetPrice>
        </TypePriceWrapper>
      </BetsWrapper>
    </BetsContainer>
  );
};

export default CartBets;
