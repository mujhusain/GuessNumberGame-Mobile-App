import {Text,StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

function GameInstruction({ children}) {
  return (
    <Text style={styles.gameDirection}>{ children}</Text>
  )
}

export default GameInstruction;

const styles = StyleSheet.create({
    gameDirection:{
        fontFamily:'open-sans-bold',
        color: colors.accent500,
        fontSize:26,
        padding: 8,
        marginBottom:20
    }

})
