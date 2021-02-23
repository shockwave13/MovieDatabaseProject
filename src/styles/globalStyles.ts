import {StyleSheet} from 'react-native';
import {appFontSizes} from 'units';

export default StyleSheet.create({
  defaultTitleStyle: {
    fontSize: appFontSizes.fontSize22,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 15,
  },
  defaultDescriptionStyle: {
    fontSize: appFontSizes.fontSize16,
    color: '#ffffff',
    textAlign: 'justify',
  },
});
