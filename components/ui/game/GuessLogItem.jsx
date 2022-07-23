import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

function GuessLogItem({ guessRound, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{guessRound}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 8,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-evenly",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
