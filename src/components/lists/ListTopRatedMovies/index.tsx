import {useNavigation} from '@react-navigation/native';
import ItemMovie from 'components/listItems/ItemMovie';
import React, {memo, ReactElement} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';

interface IListTopRatedMovies {
  data: Array<any>;
  onEndReached?: () => void;
}

const ListTopRatedMovies = (props: IListTopRatedMovies): ReactElement => {
  const {data, onEndReached} = props;
  const navigation = useNavigation();
  const navigateTo = (screenName: string, params?: object): void => {
    navigation.navigate(screenName, params);
  };

  return (
    <FlatList
      onEndReached={onEndReached}
      numColumns={2}
      data={data}
      columnWrapperStyle={styles.columnWrapperStyle}
      keyExtractor={(item, index) => index + item.id.toString()}
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
