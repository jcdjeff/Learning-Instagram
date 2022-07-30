import {StyleSheet, Text, Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import user from '../assets/data/user.json';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import Button from '../components/Button';

const ProfileHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Image source={{uri: user.image}} style={styles.profileImage} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>88</Text>
          <Text>Post</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>24,888</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>48</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.username}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      {/* BUTTONS */}
      <View style={styles.buttonsContainer}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('Edit Profile')}
        />
        <Button text="Message" onPress={() => console.warn('Sending a Msg')} />
      </View>

      {/* GRID VIEW POST */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    padding: 15,
    alignItems: 'center',
  },
  numberText: {
    fontSize: Fonts.size.mid,
    fontWeight: Fonts.weight.bold,
    color: Colors.black,
  },
  username: {
    marginVertical: 10,
    fontWeight: Fonts.weight.semi,
    fontSize: Fonts.size.mid,
  },
  bio: {},
  buttonsContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default ProfileHeader;
