import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList, ScrollView } from "react-native";
import Title from "../components/Title";
import Card from "../components/ui/Card";
import GameInstruction from "../components/ui/game/GameInstruction";
import NumberContainer from "../components/ui/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/ui/game/GuessLogItem";

function getRandomBetween(min, max, exclude) {
  const ranodmNumber = Math.floor(Math.random() * (max - min)) + min;
  if (exclude === ranodmNumber) {
    return getRandomBetween(min, max, exclude);
  } else {
    return ranodmNumber;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initileNumber = getRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initileNumber);
  const [guessRound, setGuessRound] = useState([initileNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "upper" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie!", "you know, its wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = getRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRound((guess) => [newRndNumber, ...guess]);
  }

  const guessRoundlength=guessRound.length;
  return (
    <View style={styles.gameScreen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <GameInstruction>Higher or Lower ?</GameInstruction>
        <View style={styles.controlButton}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "upper")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.guessLogs}>
        <FlatList
          data={guessRound}
          renderItem={(itemData) => <GuessLogItem guess={itemData.item} guessRound={guessRoundlength-itemData.index} />}
          keyExtractor={(item) => item}
          />
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
  controlButton: {
    flexDirection: "row",
  },
  guessLogs:{
    height:390
  }
});
