import {StyleSheet, Text, Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import user from '../assets/data/user.json';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../navigation/types';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

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
          onPress={() => navigation.navigate('Edit Profile')}
        />
        {/* RTRN TO PRV SCREEN - USE POP TO TOP TO RETURN TO 1ST SCREEN */}
        <Button text="Go Back" onPress={navigation.goBack} />
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
