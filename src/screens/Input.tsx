import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Comment Posted');
    // Send Data to Backend
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.img}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Comment goes here"
        style={styles.input}
        multiline={true}
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: Colors.borders,
  },
  img: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 2,
  },
  input: {
    flex: 1,
    borderColor: Colors.borders,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 40,
  },
  button: {
    fontSize: Fonts.size.sm,
    fontWeight: Fonts.weight.full,
    position: 'absolute',
    right: 15,
    bottom: 15,
    color: Colors.primary,
  },
});

export default Input;
