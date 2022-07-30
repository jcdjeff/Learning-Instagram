/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import Colors from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* CONTENT */}
      {/* <DoublePressable onDoublePress={toggleLike}>{content}</DoublePressable> */}
      {content}

      {/* BOTTOM */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? Colors.accent : Colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={Colors.black}
          />
        </View>

        {/* LIKES */}
        <Text style={styles.texts}>
          Liked by
          <Text style={styles.bold}>Vadim </Text>
          and <Text style={styles.bold}>88 others</Text>
        </Text>

        {/* DESCRIPTION */}
        <Text
          style={styles.texts}
          numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}> {post.user.username} </Text>
          {post.description}.
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* COMMENTS */}
        <Text style={styles.internal}>View all {post.nofComments}Comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {/* POSTED DATES */}
        <Text style={styles.internal}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
