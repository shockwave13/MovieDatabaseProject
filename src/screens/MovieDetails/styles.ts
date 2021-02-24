import {StyleSheet} from 'react-native';
import {appFontSizes, appSizes} from 'units';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: '#06445c',
    flex: 1,
  },
  imageContainerStyle: {
    paddingVertical: appSizes.wp5percent,
    backgroundColor: 'rgba(18, 85, 128, 0.1)',
  },
  imageStyle: {
    height: appSizes.wp85percent,
  },
  infoContainerStyle: {
    paddingHorizontal: appSizes.wp3percent,
    paddingBottom: appSizes.wp10percent,
  },
  imageBackgroundStyle: {},
  showMoreTextStyle: {
    fontSize: appFontSizes.fontSize16,
    color: '#00c9bf',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
