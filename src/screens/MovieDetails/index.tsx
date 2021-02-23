import React, {ReactElement, useEffect, useState, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieCredits, getMovieDetails, setValueMovies} from 'store/movies';
import {
  selectCurrentMovieDetails,
  selectCurrentMovieCredits,
} from 'store/movies/selectors';
import {selectAppLoadingStatus} from 'store/app/selectors';
import {IStore} from 'store/types';
import styles from './styles';
import {IMAGE_BASE_URL} from 'api/constants';
import globalStyles from 'styles/globalStyles';
import DefaultLoader from 'components/loaders/DefaultLoader';
import {isObjectEmpty} from 'services/helpers';
import DefaultHeader from 'components/headers/DefaultHeader';

export default function MovieDetails({navigation, route}: any): ReactElement {
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(false);
  const {movieId} = route.params;
  const loading = useSelector((state: IStore) => selectAppLoadingStatus(state));
  const currentMovieDetails = useSelector((state: IStore) =>
    selectCurrentMovieDetails(state),
  );
  const currentMovieCredits = useSelector((state: IStore) =>
    selectCurrentMovieCredits(state),
  );

  const isEmpty = isObjectEmpty(currentMovieDetails);

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    dispatch(getMovieCredits(movieId));
    return cleanUp;
  }, []);

  const cleanUp = () => {
    dispatch(setValueMovies('currentMovieDetails', {}));
    dispatch(setValueMovies('currentMovieCredits', {}));
  };

  useEffect(() => {
    if (!isEmpty && currentMovieDetails.overview.length < 300) {
      setShowMoreButtonVisible(false);
      setShowFullDescription(true);
    } else {
      setShowMoreButtonVisible(true);
      setShowFullDescription(false);
    }
  }, [isEmpty, currentMovieDetails]);

  if (isEmpty) {
    return <DefaultLoader />;
  }
  return (
    <View style={styles.containerStyle}>
      <DefaultHeader useLeftButton title={currentMovieDetails.title} />
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackgroundStyle}
        source={{
          uri: `${IMAGE_BASE_URL}${currentMovieDetails.backdrop_path}`,
        }}>
        <View style={styles.imageContainerStyle}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{
              uri: `${IMAGE_BASE_URL}${currentMovieDetails.poster_path}`,
            }}
          />
        </View>
      </ImageBackground>
      <View style={styles.infoContainerStyle}>
        <Text style={globalStyles.defaultTitleStyle}>
          {currentMovieDetails.title}
        </Text>
        <Text style={globalStyles.defaultDescriptionStyle}>
          {showFullDescription
            ? currentMovieDetails.overview
            : `${currentMovieDetails.overview.slice(0, 300)}...`}
        </Text>
        {showMoreButtonVisible && (
          <TouchableOpacity
            onPress={() => setShowFullDescription(!showFullDescription)}>
            <Text style={styles.showMoreTextStyle}>
              {showFullDescription ? 'less' : 'show more'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
