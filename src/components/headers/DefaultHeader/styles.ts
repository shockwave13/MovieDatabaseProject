import {StyleSheet} from 'react-native';
import {appFontSizes, appSizes} from 'units';

export default StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: appSizes.wp3percent,
  },

  titleStyle: {
    fontSize: appFontSizes.fontSize22,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
});
