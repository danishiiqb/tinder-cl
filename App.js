import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-red-500`}>Hello world</Text>
    </SafeAreaView>
  );
}
