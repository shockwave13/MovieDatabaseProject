import React, {memo, ReactElement} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export interface IItemMovie {
  title: string;
  useLeftButton: boolean;
  onPress?: () => void;
}

const DefaultHeader = (props: IItemMovie): ReactElement => {
  const {title, useLeftButton} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      {useLeftButton && (
        <Icon
          onPress={() => navigation.goBack()}
          name="chevron-left"
          color="#ffffff"
          size={45}
        />
      )}

      <Text style={styles.titleStyle}>{title}</Text>

      <Icon
        // onPress={() => navigation.goBack()}
        name="star-outline"
        color="#ffffff"
        size={40}
      />
    </View>
  );
};

export default memo(DefaultHeader);
