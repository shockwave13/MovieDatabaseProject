import React, {ReactElement, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {selectFavoritesMovies} from 'store/movies/selectors';
import ListTopRatedMovies from 'components/lists/ListTopRatedMovies';
import {IStore} from 'store/types';
import styles from './styles';
import DefaultInput from 'components/buttons/DefaultInput';

export default function FavoritesMovies(): ReactElement {
  const favoritesMovies = useSelector((state: IStore) =>
    selectFavoritesMovies(state),
  );
  const [filteringKey, setFilteringKey] = useState('');

  const filtering = () =>
    favoritesMovies.filter((item: any) =>
      item.original_title.toLowerCase().includes(filteringKey.toLowerCase()),
    );

  return (
    <View style={styles.containerStyle}>
      <DefaultInput
        value={filteringKey}
        onChangeText={(text) => setFilteringKey(text)}
        autoFocus={false}
        placeholder="Search"
        rightIconProps={{
          name: 'x',
          type: 'feather',
          onPress: () => setFilteringKey(() => ''),
        }}
      />
      <ListTopRatedMovies data={filtering()} />
    </View>
  );
}
