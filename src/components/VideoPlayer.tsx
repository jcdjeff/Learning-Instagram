import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import Colors from '../theme/Colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.button}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={24}
          color={Colors.white}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'auto',
  },
  button: {
    backgroundColor: Colors.black,
    padding: 5,
    borderRadius: 24,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default VideoPlayer;
