import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Input from "../components/ui/Input";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";

function GameStartScreen({handleChoosenNumber}) {
    const [enteredText, setEnteredText] = useState("");
    function handleEnteredText(text) {
        setEnteredText(text);
    }
    function handleConfirmInput() {
        const chosenNumber=parseInt(enteredText);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99){
            // Show Alert
            Alert.alert("Invalid number!", 'Number has to be number between 1 and 99',[{text:'Ok',style:'destructive',onPress:handleReset}])
        }
        handleChoosenNumber(chosenNumber);
    }
    
    function handleReset(){
        setEnteredText('');
    }
  return (
    <View style={styles.inputContainer}>
      <Input onChangeText={handleEnteredText} value={enteredText} />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleReset} >Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary800,
    marginTop: 100,
    padding: 15,
    margin: 20,
    borderRadius: 10,
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  numberInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    fontSize: 32,
    height: 50,
    marginVertical: 8,
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
