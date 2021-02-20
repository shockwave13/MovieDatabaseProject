import React, {ReactElement, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from 'store/app';
import styles from './styles';

export default function Home(): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View>
      <Text>123</Text>
    </View>
  );
}
