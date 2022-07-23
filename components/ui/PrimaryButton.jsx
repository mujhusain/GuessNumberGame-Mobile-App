import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function PrimaryButton({ children ,onPress}) {
  function handleOnPress() {
    onPress();
  }
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, pressed]
            : styles.innerButtonContainer
        }
        onPress={handleOnPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerButtonContainer: {
    borderRadius: 20,
    margin: 8,
    overflow: "hidden",
    flex: 1,
  },
  innerButtonContainer: {
    backgroundColor: colors.primary500,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
