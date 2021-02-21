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

export interface IItemMovie extends ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const ItemMovie = (props: IItemMovie): ReactElement => {
  const {onPress, title, buttonStyle, titleStyle} = props;
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(ItemMovie);
