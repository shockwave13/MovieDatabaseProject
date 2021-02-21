import ItemMovie, {IItemMovie} from 'components/listItems/ItemMovie';
import React, {memo, ReactElement} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';

interface IListTopRatedMovies {
  data: Array<IItemMovie>;
}

const ListTopRatedMovies = (props: IListTopRatedMovies): ReactElement => {
  const {data} = props;
  return (
    <FlatList
      numColumns={2}
      data={data}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={({item}) => (
        <ItemMovie
          title={item.title}
          imageSource={item.poster_path}
          onPress={() => null}
        />
      )}
    />
  );
};

export default memo(ListTopRatedMovies);
