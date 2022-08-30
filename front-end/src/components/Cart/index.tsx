import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CartBets from "components/CartBets";
import { useState } from "react";
import { ActivityIndicator, Alert, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Bold } from "screens/Bet/styles";
import { NoBet } from "screens/Home/styles";
import bets from "services/bets";
import { ICartBets, Nav } from "shared/interfaces";
import { cartCurrencyFormat } from "shared/utils";
import { setBets } from "store/betSlice";
import { setCart } from "store/cartSlice";
import {
  CartBetsContainer,
  CartCard,
  CartContainer,
  CartSaveButton,
  CartSaveButtonText,
  CartTitle,
  CartTotalPrice,
} from "./styles";

const Cart = () => {
  const { navigate } = useNavigation<Nav>();
  const dispatch = useDispatch();
  const { cartData } = useSelector((state: any) => state.cart);
  const { newBet } = bets();
  const [loading, setLoading] = useState<boolean>(false);

  const onClickSaveBets = async () => {
    const betData = {
      games: cartData.map((bet: ICartBets) => {
        return {
          game_id: bet.game_id,
          numbers: bet.numbers,
        };
      }),
    };
    try {
      setLoading(true);
      const response = await newBet(betData);
      dispatch(setCart([]));
      navigate("Home");
      dispatch(setBets(response.bet));
    } catch (error: any) {
      Alert.alert("Error", error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const onDeleteBet = (bet: ICartBets) => {
    Alert.alert(
      "Confirm delete",
      `Do you want to delete ${
        bet?.type
      } with the numbers ${bet?.numbers.toString()}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            dispatch(setCart(cartData.filter((cart: any) => cart !== bet)));
          },
        },
      ]
    );
  };

  return (
    <CartContainer>
      <CartCard>
        <CartTitle>Cart</CartTitle>
        <CartBetsContainer>
          {cartData.length > 0 ? (
            <FlatList
              data={cartData}
              keyExtractor={(item) => item.numbers.toString()}
              renderItem={({ item }) => (
                <CartBets onDelete={() => onDeleteBet(item)} data={item} />
              )}
            />
          ) : (
            <NoBet style={{ marginLeft: 20 }}>
              No bet found, add one first
            </NoBet>
          )}
        </CartBetsContainer>
        <CartTotalPrice>
          <Bold>Cart</Bold> Total: R${" "}
          {cartData.length > 0 ? cartCurrencyFormat(cartData) : "0,00"}
        </CartTotalPrice>
        <CartSaveButton onPress={onClickSaveBets}>
          <CartSaveButtonText>
            Save <Ionicons name="arrow-forward" size={30} />
          </CartSaveButtonText>
        </CartSaveButton>
      </CartCard>
    </CartContainer>
  );
};

export default Cart;
