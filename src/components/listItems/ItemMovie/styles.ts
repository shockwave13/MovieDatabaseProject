import {StyleSheet} from 'react-native';
import {appSizes} from 'units';

export default StyleSheet.create({
  containerStyle: {
    height: appSizes.wp85percent,
    width: appSizes.wp45percent,
  },
  contentContainerStyle: {
    height: '100%',
    width: '100%',
  },
  titleStyle: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    height: 60,
  },
  posterImageStyle: {
    marginBottom: 10,
    flex: 1,
  },
});
