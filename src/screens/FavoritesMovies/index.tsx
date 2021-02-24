import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {selectFavoritesMovies} from 'store/movies/selectors';
import ListTopRatedMovies from 'components/lists/ListTopRatedMovies';
import {IStore} from 'store/types';
import styles from './styles';

export default function FavoritesMovies(): ReactElement {
  const favoritesMovies = useSelector((state: IStore) =>
    selectFavoritesMovies(state),
  );
  return (
    <View style={styles.containerStyle}>
      <ListTopRatedMovies data={favoritesMovies} />
    </View>
  );
}
