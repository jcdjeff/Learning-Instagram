/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import PostUploadScreen from './src/screens/PostUploadScreen';
// import EditProfile from './src/screens/EditProfile';
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <PostUploadScreen />
      {/* <EditProfile /> */}
      {/* <EditProfileScreen /> */}
      {/* <ProfileScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
