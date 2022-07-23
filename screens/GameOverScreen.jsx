import { Image, StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";

function GameOverScreen({ roundNumber, userNumber, startNewGame }) {
  return (
    <View style={styles.gameOverScreen}>
      <Title>Game Over!</Title>
      <View>
        <Image
          style={styles.gameOverScreenImage}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View style={styles.gameOverTextContainer}>
        <Text style={styles.gameOverText}>
          Your phone needed <Text style={styles.boldText}>{roundNumber} </Text>
          round to guess to number
          <Text style={styles.boldText}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverScreen: {
    marginTop: 80,
    alignItems: "center",
  },
  gameOverScreenImage: {
    width: 300,
    height: 300,
    marginTop: 30,
    marginBottom: 20,
  },
  gameOverTextContainer: {},
  gameOverText: {
    fontFamily: "open-sans",
    color: colors.primary800,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  boldText: {
    fontFamily: "open-sans-bold",
    color: colors.primary800,
  },
});
