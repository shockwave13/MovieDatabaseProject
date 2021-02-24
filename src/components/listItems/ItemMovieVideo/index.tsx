import React, {memo, ReactElement} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {YOUTUBE_BASE_URL, VIMEO_BASE_URL} from 'api/constants';

export interface IItemMovie {
  title: string;
  site: string;
  type: string;
  videoKey: string;
}

const ItemMovieVideo = (props: IItemMovie): ReactElement => {
  const {site, title, type, videoKey} = props;
  const youTube = require('../../../assets/images/youtube.png');
  const vimeo = require('../../../assets/images/vimeo.jpg');

  const handlePressVideo = () => {
    if (site === 'YouTube') {
      Linking.openURL(`${YOUTUBE_BASE_URL}${videoKey}`);
    } else if (site === 'Vimeo') {
      Linking.openURL(`${VIMEO_BASE_URL}${videoKey}`);
    }
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={styles.contentContainerStyle}
        onPress={handlePressVideo}>
        <FastImage
          style={styles.imageStyle}
          source={site === 'YouTube' ? youTube : vimeo}
          resizeMode={'contain'}
        />
        <Text numberOfLines={3} style={styles.titleStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ItemMovieVideo);
