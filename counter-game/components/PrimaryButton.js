import { Pressable, Text, View } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler(){
    console.log('pressed');
  }
  
  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;