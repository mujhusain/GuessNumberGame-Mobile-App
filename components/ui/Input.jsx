import { TextInput, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function Input({ onChangeText, value }) {
  return (
    <TextInput
      onChangeText={onChangeText}
      style={styles.numberInput}
      maxLength={2}
      keyboardType="number-pad"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  numberInput: {
    borderBottomWidth: 3,
    borderBottomColor: colors.accent500,
    color: colors.accent500,
    fontSize: 32,
    height: 50,
    marginVertical: 8,
    fontWeight: "bold",
    width: 80,
    textAlign: "center",
  },
});
