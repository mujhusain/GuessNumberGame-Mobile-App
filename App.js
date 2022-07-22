import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GameStartScreen from "./screens/GameStartScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function handleChoosenNumber(choosenNumber) {
    setUserNumber(choosenNumber);
  }

  let screen = <GameStartScreen handleChoosenNumber={handleChoosenNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={[colors.primary700,colors.primary500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
