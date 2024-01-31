import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
      onPress={onPress} 
      android_ripple={{ color: Colors.primary600 }}
      style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 4,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
});
export default PrimaryButton;