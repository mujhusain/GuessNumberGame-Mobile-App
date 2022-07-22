import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/ui/game/NumberContainer";

function getRandomBetween(min, max, exclude) {
  const ranodmNumber = Math.floor(Math.random() * (max - min)) + min;
  if (exclude === ranodmNumber) {
    return getRandomBetween(min, max, exclude);
  } else {
    return ranodmNumber;
  }
}

function GameScreen({ userNumber }) {
  const initileNumber = getRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initileNumber);

  return (
    <View style={styles.gameScreen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.guessResult}>Its Highr or Low</Text>
      </View>
      <View style={styles.guessLogs}>
        <Text>Guess</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    marginTop: 60,
    margin: 16,
  },
});
