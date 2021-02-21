import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from 'screens/MovieDetails';
import BottomTabs from 'navigation/bottomTabsNavigation';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}
