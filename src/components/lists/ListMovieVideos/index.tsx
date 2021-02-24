import ItemMovieVideo from 'components/listItems/ItemMovieVideo';
import React, {memo, ReactElement} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';

interface IListTopRatedMovies {
  data: Array<any>;
}

const ListMovieVideos = (props: IListTopRatedMovies): ReactElement => {
  const {data} = props;

  return (
    <FlatList
      horizontal
      data={data}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item, index) => index + item.id.toString()}
      renderItem={({item}) => (
        <ItemMovieVideo
          title={item.name}
          site={item.site}
          videoKey={item.key}
          type={item.type}
        />
      )}
    />
  );
};

export default memo(ListMovieVideos);
