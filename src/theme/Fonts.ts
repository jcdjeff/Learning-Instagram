import {TextStyle} from 'react-native';

const size = {
  xsm: 10,
  sm: 12,
  default: 14,
  mid: 16,
  lg: 18,
  xlg: 20,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
