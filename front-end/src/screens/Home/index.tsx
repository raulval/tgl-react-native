import { useNavigation } from "@react-navigation/native";
import Bets from "components/Bets";
import GameButton from "components/GameButton";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import gamesService from "services/games";
import { bets as betsService } from "services/index";
import { Game, IBets, Nav } from "shared/interfaces";
import { getGames } from "store/gameSlice";
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
        console.log(err);
      });
  }, []);

  useEffect(() => {
    listBets(config)
      .then((res) => {
        setBets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedGame]);

  const onClickGameButton = (game: Game) => {
    if (selectedGame.includes(game.type)) {
      setSelectedGame(selectedGame.filter((type) => type !== game.type));
    } else {
      setSelectedGame([...selectedGame, game.type]);
    }
  };

  return (
    <HomeContainer>
      {/* <NavBar home /> */}
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
      <BetsPlayedContainer>
        {bets.length > 0 ? (
          <FlatList
            data={bets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Bets data={item} />}
          />
        ) : (
          <NoBet>No bets yet, make one!</NoBet>
        )}
      </BetsPlayedContainer>
    </HomeContainer>
  );
};

export default Home;
