import React, {ReactElement, useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieCredits, getMovieDetails} from 'store/movies';
import {
  selectCurrentMovieDetails,
  selectCurrentMovieCredits,
} from 'store/movies/selectors';

import {IStore} from 'store/types';
import styles from './styles';
import {IMAGE_BASE_URL} from 'api/constants';

export default function MovieDetails({navigation, route}: any): ReactElement {
  const dispatch = useDispatch();
  const {movieId} = route.params;
  const currentMovieDetails = useSelector((state: IStore) =>
    selectCurrentMovieDetails(state),
  );
  const currentMovieCredits = useSelector((state: IStore) =>
    selectCurrentMovieCredits(state),
  );

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    dispatch(getMovieCredits(movieId));
  }, []);

  console.log({currentMovieDetails});

  return (
    <View style={styles.containerStyle}>
      <Image
        resizeMode="contain"
        style={styles.backgroundImageStyle}
        source={{uri: `${IMAGE_BASE_URL}${currentMovieDetails.poster_path}`}}
      />
      <Text>{currentMovieDetails.title}</Text>
      <Text>{currentMovieDetails.overview}</Text>
    </View>
  );
}
