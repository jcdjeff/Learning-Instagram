import React from 'react';
import user from '../assets/data/user.json';
import {useRoute, useNavigation} from '@react-navigation/native';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../components/FeedGridView';
import {
  MyProfileNavigatorProp,
  UserProfileNavigatorProp,
  UserProfileRouteProp,
  MyProfileRouteProp,
} from '../navigation/types';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const navigation = useNavigation<
    MyProfileNavigatorProp | UserProfileNavigatorProp
  >();

  const userId = route.params?.userId;

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
