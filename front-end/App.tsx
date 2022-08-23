import {
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
} from "@expo-google-fonts/ibm-plex-sans";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";
import { Container } from "./src/styles/global";
import Theme from "./src/styles/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          IBMPlexSans_300Light,
          IBMPlexSans_300Light_Italic,
          IBMPlexSans_400Regular,
          IBMPlexSans_400Regular_Italic,
          IBMPlexSans_600SemiBold,
          IBMPlexSans_600SemiBold_Italic,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container onLayout={onLayoutRootView}>
        <Routes />
      </Container>
    </ThemeProvider>
  );
}
