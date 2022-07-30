import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>8 Likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={8}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={10}
          style={styles.icon}
          color={isLiked ? Colors.accent : Colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {},
  avatar: {
    width: 50,
    borderRadius: 25,
    aspectRatio: 1,
    marginRight: 5,
  },
  bold: {
    fontWeight: Fonts.weight.bold,
  },
  commentText: {
    color: Colors.black,
    lineHeight: 18,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
});

export default Comment;
