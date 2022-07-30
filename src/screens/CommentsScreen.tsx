import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import comments from '../assets/data/comments.json';
import Comment from '../components/Comment/Comment';
import Input from './Input';

const CommentScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10}}
      />
      <Input />
    </SafeAreaView>
  );
};

export default CommentScreen;
