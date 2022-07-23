import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.accent500,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.primary800
  },
  numberText: {
    fontFamily:'open-sans-bold',
    color: colors.accent500,
    fontSize: 38,
  },
});
