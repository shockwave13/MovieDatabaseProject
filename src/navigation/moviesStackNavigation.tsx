import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from 'screens/MovieDetails';
import DefaultHeader from 'components/headers/DefaultHeader';
import {useSelector} from 'react-redux';
import {IStore} from 'store/types';
import {selectCurrentMovieDetails} from 'store/movies/selectors';

const Stack = createStackNavigator();

export default function MoviesStack() {
  const currentMovieDetails = useSelector((state: IStore) =>
    selectCurrentMovieDetails(state),
  );
  console.log({currentMovieDetails});
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}
