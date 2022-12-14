import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { cartCurrencyFormat } from "shared/utils";
import { CartButton, CartItems, HeaderCartButtonContainer } from "./styles";

const HeaderCartButton = () => {
  const { cartData } = useSelector((state: any) => state.cart);
  const navigation = useNavigation<any>();

  return (
    <HeaderCartButtonContainer>
      <CartButton onPress={() => navigation?.getParent("cart").openDrawer()}>
        <Ionicons name="cart-outline" size={26} />
        <CartItems>
          R$ {cartData.length > 0 ? cartCurrencyFormat(cartData) : "0,00"}
        </CartItems>
      </CartButton>
    </HeaderCartButtonContainer>
  );
};

export default HeaderCartButton;
