import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CartButton, CartItems, HeaderCartButtonContainer } from "./styles";

const HeaderCartButton = () => {
  const { cartData } = useSelector((state: any) => state.cart);
  const navigation = useNavigation<any>();

  console.log(cartData);

  return (
    <HeaderCartButtonContainer>
      <CartButton onPress={() => navigation?.getParent("cart").openDrawer()}>
        <Ionicons name="cart-outline" size={26} />
      </CartButton>
      <CartItems>{cartData.length}x</CartItems>
    </HeaderCartButtonContainer>
  );
};

export default HeaderCartButton;
