import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from 'store/movies';
import {selectTopRatedMovies} from 'store/movies/selectors';
import ListTopRatedMovies from 'components/lists/ListTopRatedMovies';
import {IStore} from 'store/types';
import styles from './styles';

export default function TopRatedMovies(): ReactElement {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state: IStore) =>
    selectTopRatedMovies(state),
  );

  const {results, page} = topRatedMovies;

  useEffect(() => {
    page === 0 && dispatch(getTopRatedMovies());
  }, []);

  const onEndReached = () => {
    dispatch(getTopRatedMovies(page + 1));
  };

  return (
    <View style={styles.containerStyle}>
      <ListTopRatedMovies onEndReached={onEndReached} data={results} />
    </View>
  );
}
