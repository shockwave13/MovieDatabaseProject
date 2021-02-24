import React, {memo, ReactElement} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {appFontSizes} from 'units';

export interface IItemMovie {
  title: string;
  useLeftButton: boolean;
  onPress?: () => void;
  onPressRightButton?: () => void;
  isFavorite?: boolean;
}

const DefaultHeader = (props: IItemMovie): ReactElement => {
  const {title, useLeftButton, onPressRightButton, isFavorite} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      {useLeftButton && (
        <Icon
          onPress={() => navigation.goBack()}
          name="chevron-left"
          color="#ffffff"
          size={appFontSizes.fontSize40}
        />
      )}

      <Text style={styles.titleStyle}>{title}</Text>

      <Icon
        onPress={onPressRightButton}
        name={isFavorite ? 'star' : 'star-outline'}
        color="#ffffff"
        size={appFontSizes.fontSize40}
      />
    </View>
  );
};

export default memo(DefaultHeader);
