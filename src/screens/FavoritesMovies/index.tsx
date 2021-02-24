import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from 'store/movies';
import {selectFavoritesMovies} from 'store/movies/selectors';
import ListTopRatedMovies from 'components/lists/ListTopRatedMovies';
import {IStore} from 'store/types';
import styles from './styles';

export default function FavoritesMovies(): ReactElement {
  const dispatch = useDispatch();
  const favoritesMovies = useSelector((state: IStore) =>
    selectFavoritesMovies(state),
  );

  useEffect(() => {
    dispatch(getTopRatedMovies(1));
  }, []);

  return (
    <View style={styles.containerStyle}>
      <ListTopRatedMovies data={favoritesMovies} />
    </View>
  );
}
