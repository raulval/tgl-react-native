import { useNavigation } from "@react-navigation/native";
import { AddButton, Bets, GameButton } from "components/index";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import gamesService from "services/games";
import { bets as betsService } from "services/index";
import { Game, IBets, Nav } from "shared/interfaces";
import { getGames } from "store/gameSlice";
import Theme from "styles/theme";
import {
  BetsPlayedContainer,
  FiltersContainer,
  FiltersText,
  HomeContainer,
  HomeHeader,
  NoBet,
  RecentGames,
} from "./styles";

const Home = () => {
  const { navigate } = useNavigation<Nav>();
  const dispatch = useDispatch();
  const { listGames } = gamesService();
  const { listBets } = betsService();
  const { isLogged } = useSelector((state: any) => state.user);
  const { cartData } = useSelector((state: any) => state.cart);
  const [bets, setBets] = useState<IBets[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<string[]>([]);

  let config = {};

  if (selectedGame.length > 0 && isLogged) {
    config = {
      params: {
        "type[]": [...selectedGame],
      },
    };
  }

  useEffect(() => {
    listGames()
      .then((res) => {
        setGames(res.data.types);
        dispatch(getGames(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    listBets(config)
      .then((res) => {
        setBets(res.data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, [selectedGame, cartData]);

  const onClickGameButton = (game: Game) => {
    if (selectedGame.includes(game.type)) {
      setSelectedGame(selectedGame.filter((type) => type !== game.type));
    } else {
      setSelectedGame([...selectedGame, game.type]);
    }
  };

  const onPressAddBet = () => {
    navigate("New Bet");
  };

  return (
    <HomeContainer>
      <Text
        style={{
          fontSize: 32,
          fontFamily: Theme.fonts.title600Italic,
          color: Theme.colors.primary.main,
          marginBottom: -65,
          marginTop: 20,
        }}
      >
        TGL
      </Text>
      <HomeHeader>
        <RecentGames>Recent Games</RecentGames>
        <FiltersText>Filters:</FiltersText>
        <FiltersContainer>
          {games.length > 0 ? (
            games.map((game: Game) => {
              const isActive = selectedGame.includes(game.type) ? true : false;
              return (
                <GameButton
                  key={game.id}
                  onPress={() => onClickGameButton(game)}
                  active={isActive}
                  type={game.type}
                  color={game.color}
                />
              );
            })
          ) : (
            <NoBet>No game found, create one first</NoBet>
          )}
        </FiltersContainer>
      </HomeHeader>
      <BetsPlayedContainer
        style={
          bets.length === 0 && {
            alignItems: "center",
          }
        }
      >
        {bets.length > 0 ? (
          <FlatList
            data={bets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Bets data={item} />}
          />
        ) : (
          <NoBet>No bets yet, make one!</NoBet>
        )}
        <AddButton onPress={onPressAddBet} />
      </BetsPlayedContainer>
    </HomeContainer>
  );
};

export default Home;
