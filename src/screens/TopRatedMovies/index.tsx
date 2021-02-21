import React, {ReactElement, useEffect} from 'react';
import {Text, View} from 'react-native';
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
  const {results} = topRatedMovies;

  useEffect(() => {
    dispatch(getTopRatedMovies(1));
  }, []);

  return (
    <View>
      <Text>123</Text>
      <ListTopRatedMovies data={results} />
    </View>
  );
}
