import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberFormat} maxLength={2} keyboardType="number-pad" />
      <PrimaryButton>Cancel</PrimaryButton>
      <PrimaryButton>Submit</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: '#eee',
    marginHorizontal: 24,
    borderRadius: 4,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
    numberFormat: {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: 'blue',
      borderBottomWidth: 2,
      marginVertical: 8,
      fontWeight: 'bold',
      alignSelf: "center",
      textAlign: "center"
    }
})

export default StartGameScreen;