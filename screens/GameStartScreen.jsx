import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";

function GameStartScreen({ handleChoosenNumber }) {
  const [enteredText, setEnteredText] = useState("");
  function handleEnteredText(text) {
    setEnteredText(text);
  }
  function handleConfirmInput() {
    const chosenNumber = parseInt(enteredText);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Show Alert
      Alert.alert(
        "Invalid number!",
        "Number has to be number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: handleReset }]
      );
    }
    handleChoosenNumber(chosenNumber);
  }

  function handleReset() {
    setEnteredText("");
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Guess My Number</Title>
      <View style={styles.gameInputContainer}>
        <Card>
          <Text style={styles.text}>Enter a number btw (1 to 99)</Text>
          <Input onChangeText={handleEnteredText} value={enteredText} />
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
            <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
          </View>
        </Card>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    marginTop: 100,
    flex: 1,
    padding: 20,
  },
  text: {
    fontFamily:'open-sans',
    color: colors.accent500,
    fontSize: 20,
    margin: 8,
  },
  gameInputContainer: {
    marginTop: 50,
  },
  numberInput: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary800,
    color: colors.primary800,
    fontSize: 32,
    height: 50,
    marginVertical: 8,
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-evenly",
  },
});
