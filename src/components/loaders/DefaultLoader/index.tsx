import React, {memo, ReactElement} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const DefaultLoader = (): ReactElement => {
  return (
    <View style={styles.containerStyle}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default memo(DefaultLoader);
