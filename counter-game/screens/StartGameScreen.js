import { useState } from 'react'

import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from '../constants/Colors';

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler(){
    setEnteredNumber('');
  }
  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
    
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid Numer!', 'Number has to be a number between 1 and 99.',
      [{ text: 'Okay', style: 'destructive', onPress:  setEnteredNumber}]
      )
      return;
    }

    props.onPickNumber(enteredNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberFormat}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
        />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer} >
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Submit</PrimaryButton></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.textLight,
    marginHorizontal: 24,
    borderRadius: 4,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberFormat: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  buttonContainer: {
    flex: 1
  }
})

export default StartGameScreen;