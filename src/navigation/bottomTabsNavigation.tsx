import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import TopRatedMovies from 'screens/TopRatedMovies';
import FavoritesMovies from 'screens/FavoritesMovies';
import {appFontSizes, appSizes} from 'units';

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: '#29d1ff',
  inactiveTintColor: '#ffffff',
  style: {
    height: appSizes.wp30percent,
    backgroundColor: '#303c45',
  },
  tabStyle: {
    justifyContent: 'center',
    paddingVertical: appSizes.wp3percent,
  },
  labelStyle: {
    fontSize: appFontSizes.fontSize16,
  },
};

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="film"
                type="feather"
                color={color}
                size={appFontSizes.fontSize30}
              />
            ),
            tabBarLabel: 'Home',
          }}
          name="TopRatedMovies"
          component={TopRatedMovies}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="heart"
                type="feather"
                color={color}
                size={appFontSizes.fontSize30}
              />
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
  },
});
