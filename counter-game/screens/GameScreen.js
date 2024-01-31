import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude){
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

function GameScreen() {
  return (
  <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
    {/* GUESS */}
    <View>
      <Text>Higher or lower?</Text>
    {/* + - */}
    </View>
    <View>
      {/* LOG ROUNDS */}
    </View>
  </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      padding: 12
    }
  }
)