
import { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#FF8202', '#FFD400']} style={styles.rootScreen}>
      <View style={styles.header}>
        <Text style={styles.text}>Task List</Text>
      </View>
      <ImageBackground
        source={require('./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.textLight
  },
  backgroundImage: {
    opacity: 0.15
  }
});
