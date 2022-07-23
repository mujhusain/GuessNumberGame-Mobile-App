import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily:'open-sans-bold',
    color: "white",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 10,
    borderRadius: 8,
  },
});
