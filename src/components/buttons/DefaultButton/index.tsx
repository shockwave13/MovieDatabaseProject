import React, {memo, ReactElement} from 'react';
import {
  ButtonProps,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface IDefaultButton extends ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const DefaultButton = (props: IDefaultButton): ReactElement => {
  const {onPress, title, buttonStyle, titleStyle} = props;
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(DefaultButton);
