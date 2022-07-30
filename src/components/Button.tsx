import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';

interface IButton {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.borders,
    borderRadius: 4,
    paddingVertical: 5,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: Colors.black,
  },
});

export default Button;
