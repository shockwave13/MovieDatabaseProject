import React, {memo, ReactElement} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {IMAGE_BASE_URL} from 'api/constants';

export interface IItemMovie {
  title: string;
  imageSource: string;
  onPress: () => void;
}

const ItemMovie = (props: IItemMovie): ReactElement => {
  const {imageSource, title, onPress} = props;
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.contentContainerStyle} onPress={onPress}>
        <FastImage
          style={styles.posterImageStyle}
          source={{
            uri: `${IMAGE_BASE_URL}${imageSource}`,
            priority: 'normal',
            cache: 'immutable',
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={[styles.titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ItemMovie);
