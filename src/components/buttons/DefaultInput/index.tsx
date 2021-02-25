import React, {memo, ReactElement} from 'react';

import {Icon, Input, InputProps} from 'react-native-elements';
import styles from './styles';

interface IDefaultInput extends InputProps {
  rightIconProps?: {
    name?: string;
    type?: string;
    onPress?: () => void;
  };
}

const DefaultInput = (props: IDefaultInput): ReactElement => {
  const {onChangeText, placeholder, rightIconProps, value} = props;
  return (
    <Input
      value={value}
      placeholder={placeholder}
      inputStyle={styles.inputStyle}
      onChangeText={onChangeText}
      rightIcon={<Icon {...rightIconProps} color="#fff" />}
    />
  );
};

export default memo(DefaultInput);
