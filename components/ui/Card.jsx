import {View,StyleSheet} from 'react-native';
import colors from '../../constants/colors';

function Card({ children}) {
  return (
    <View style={styles.inputContainer}>{ children}</View>
  )
}

export default Card;


const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary800,
      borderRadius: 10,
      elevation: 4,
      padding: 15,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 4,
      shadowOpacity: 0.25,
    },
  });
  