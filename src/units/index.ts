import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const appSizes = {
  wp45percent: wp('45%'),
  wp85percent: wp('85%'),
  wp100percent: wp('100%'),
  wp3percent: wp('3%'),
  wp5percent: wp('5%'),
};

export const appFontSizes = {
  fontSize16: RFValue(16, 812),
  fontSize22: RFValue(22, 812),
};
