import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { BetNumbers, GameButton } from "components/index";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Game, ICartBets } from "shared/interfaces";
import { setCart } from "store/cartSlice";
import { NoBet } from "../Home/styles";

import {
  AddToCartButton,
  AddToCartButtonText,
  BetContainer,
  Bold,
  ButtonsContainer,
  ChooseGameText,
  ClearGameButton,
  ClearGameButtonText,
  CompleteGameButton,
  CompleteGameButtonText,
  FillBetText,
  GameDescription,
  GamesView,
  MainContainer,
  MainTitle,
  NumbersContainer,
} from "./styles";

const Bet = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const { gamesData } = useSelector((state: any) => state.games);
  const { cartData } = useSelector((state: any) => state.cart);
  const [selectedGame, setSelectedGame] = useState<Game>(gamesData.types[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [cartBets, setCartBets] = useState<ICartBets[]>([]);

  const onClickGameButton = (game: Game) => {
    setSelectedGame(game);
  };

  const onClickBetNumber = (selectedNumber: number) => {
    if (selectedNumbers.length < selectedGame.max_number) {
      if (selectedNumbers.includes(selectedNumber)) {
        setSelectedNumbers(
          selectedNumbers.filter((number) => number !== selectedNumber)
        );
      } else {
        const newSelectedNumbers = [...selectedNumbers, selectedNumber].sort(
          (a, b) => a - b
        );
        setSelectedNumbers(newSelectedNumbers);
      }
    } else if (selectedNumbers.length === selectedGame.max_number) {
      if (selectedNumbers.includes(selectedNumber)) {
        setSelectedNumbers(
          selectedNumbers.filter((number) => number !== selectedNumber)
        );
      } else {
        Alert.alert(
          "Error",
          `You can only select ${selectedGame.max_number} numbers`
        );
      }
    }
  };

  const onClickCompleteGame = () => {
    let choosenNumbers: number[] = selectedNumbers;
    const generatesRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * selectedGame.range) + 1;
      if (choosenNumbers.includes(randomNumber)) {
        generatesRandomNumber();
      } else {
        choosenNumbers.push(randomNumber);
      }
    };
    while (choosenNumbers.length < selectedGame.max_number) {
      generatesRandomNumber();
    }
    setSelectedNumbers([...choosenNumbers.sort((a, b) => a - b)]);
  };

  const onClickClearGame = () => {
    setSelectedNumbers([]);
  };

  const onClickAddToCart = () => {
    if (selectedNumbers.length === selectedGame.max_number) {
      const addToCartData = {
        game_id: selectedGame.id,
        numbers: selectedNumbers,
        color: selectedGame.color,
        type: selectedGame.type,
        price: selectedGame.price,
      };
      setCartBets([...cartBets, addToCartData]);
      dispatch(setCart([...cartData, addToCartData]));
      setSelectedNumbers([]);
      navigation?.getParent("cart").openDrawer();
    } else {
      Alert.alert(
        "Error",
        `You must select more ${
          selectedGame.max_number - selectedNumbers.length
        } numbers`
      );
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BetContainer>
        <MainContainer>
          <MainTitle>
            <Bold>New bet</Bold> for {selectedGame.type}
          </MainTitle>
          <ChooseGameText>Choose a game</ChooseGameText>
          <GamesView>
            {gamesData.types.length > 0 ? (
              gamesData.types.map((game: Game) => {
                const isActive = selectedGame.type === game.type ? true : false;
                return (
                  <GameButton
                    key={game.id}
                    active={isActive}
                    onPress={() => onClickGameButton(game)}
                    type={game.type}
                    color={game.color}
                  />
                );
              })
            ) : (
              <NoBet>No game found, create one first</NoBet>
            )}
          </GamesView>
          <FillBetText>Fill your bet</FillBetText>
          <GameDescription>{selectedGame.description}</GameDescription>
          <NumbersContainer>
            <BetNumbers
              range={selectedGame.range}
              onPress={onClickBetNumber}
              selectedNumbers={selectedNumbers}
            ></BetNumbers>
          </NumbersContainer>

          <ButtonsContainer>
            <CompleteGameButton onPress={onClickCompleteGame}>
              <CompleteGameButtonText>Complete game</CompleteGameButtonText>
            </CompleteGameButton>
            <ClearGameButton onPress={onClickClearGame}>
              <ClearGameButtonText>Clear game</ClearGameButtonText>
            </ClearGameButton>
          </ButtonsContainer>
          <AddToCartButton onPress={onClickAddToCart}>
            <AddToCartButtonText>
              <Ionicons name="cart-outline" size={24} />
              Add to cart
            </AddToCartButtonText>
          </AddToCartButton>
        </MainContainer>
      </BetContainer>
    </ScrollView>
  );
};

export default Bet;
