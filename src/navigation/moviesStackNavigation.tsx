import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from 'screens/MovieDetails';

const Stack = createStackNavigator();

export default function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}
