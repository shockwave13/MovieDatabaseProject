import {StyleSheet} from 'react-native';
import {appFontSizes, appSizes} from 'units';

export default StyleSheet.create({
  containerStyle: {
    marginHorizontal: 5,
  },
  contentContainerStyle: {
    width: appSizes.wp30percent,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: appFontSizes.fontSize12,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  imageStyle: {
    width: appSizes.wp30percent,
    height: appSizes.wp30percent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
