export type {
  IBodyAuth,
  IChangePasswordResponse,
  ILoginResponse,
  IResetResponse,
  LoginData,
  User,
} from "./AuthInterfaces";
export type {
  BetParams,
  IBets,
  IBodyBets,
  ICartBets,
  IListBetsResponse,
  INewBetResponse,
} from "./BetsInterfaces";
export type { Game, GameData, IListGamesResponse } from "./GamesInterfaces";
export type { IBodyEditUserInfo, ISignUpResponse } from "./UserInterfaces";

export type Nav = {
  navigate: (value: string) => void;
};

export type NavReset = {
  reset: (value: { routes: [{ name: string }] }) => void;
};
