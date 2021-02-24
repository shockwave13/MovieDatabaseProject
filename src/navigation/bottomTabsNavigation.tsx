import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import TopRatedMovies from 'screens/TopRatedMovies';
import FavoritesMovies from 'screens/FavoritesMovies';

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: 'blue',
  inactiveTintColor: 'gray',
  style: {
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  tabStyle: {
    justifyContent: 'center',
  },
};

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="film" type="feather" color={color} size={30} />
            ),
            tabBarLabel: 'Home',
          }}
          name="TopRatedMovies"
          component={TopRatedMovies}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="heart" type="feather" color={color} size={30} />
            ),
            tabBarLabel: 'Favorites',
          }}
          name="FavoritesMovies"
          component={FavoritesMovies}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
