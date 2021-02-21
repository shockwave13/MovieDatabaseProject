import {StyleSheet} from 'react-native';
import {appSizes} from 'units';

export default StyleSheet.create({
  columnWrapperStyle: {
    paddingHorizontal: appSizes.generalAppPadding,
    justifyContent: 'space-between',
    paddingVertical: appSizes.generalAppPadding,
  },
});
