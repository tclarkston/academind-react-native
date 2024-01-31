import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

function Title({children}){
return (
  <Text style={styles.title}>{children}</Text>
);
}

const styles = StyleSheet.create(
  {
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: Colors.primary500,
      textAlign: "center"
    }
  });

export default Title