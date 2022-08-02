import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  internal: {
    color: 'grey',
    lineHeight: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: Fonts.size.default,
    fontWeight: Fonts.weight.bold,
  },
  threeDots: {
    color: Colors.black,
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  text: {
    color: Colors.primary,
    fontSize: Fonts.size.lg,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  texts: {
    color: Colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: Fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    lineHeight: 18,
  },
});
