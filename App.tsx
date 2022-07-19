/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import Colors from './src/theme/Colors';
import Fonts from './src/theme/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <AntDesign name="stepforward" size={25} color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.primary,
    fontSize: Fonts.size.lg,
  },
});

export default App;
