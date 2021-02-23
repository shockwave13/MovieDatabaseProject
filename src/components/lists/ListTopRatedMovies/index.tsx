import {useNavigation} from '@react-navigation/native';
import ItemMovie, {IItemMovie} from 'components/listItems/ItemMovie';
import React, {memo, ReactElement} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';

interface IListTopRatedMovies {
  data: Array<IItemMovie>;
}

const ListTopRatedMovies = (props: IListTopRatedMovies): ReactElement => {
  const {data} = props;
  const navigation = useNavigation();
  const navigateTo = (screenName: string, params?: object): void => {
    navigation.navigate(screenName, params);
  };

  return (
    <FlatList
      numColumns={2}
      data={data}
      columnWrapperStyle={styles.columnWrapperStyle}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <ItemMovie
          title={item.title}
          imageSource={item.poster_path}
          onPress={() => navigateTo('MovieDetails', {movieId: item.id})}
        />
      )}
    />
  );
};

export default memo(ListTopRatedMovies);
