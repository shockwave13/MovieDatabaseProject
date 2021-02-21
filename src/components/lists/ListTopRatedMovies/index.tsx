import ItemMovie, {IItemMovie} from 'components/listItems/ItemMovie';
import React, {memo, ReactElement} from 'react';
import {
  ButtonProps,
  FlatList,
  FlatListProps,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

// interface IListTopRatedMovies extends FlatListProps<IItemMovie> {}
interface IListTopRatedMovies {
  data: Array<IItemMovie>;
}

const ListTopRatedMovies = (props: IListTopRatedMovies): ReactElement => {
  const {data} = props;
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ItemMovie title={item.title} onPress={() => null} />
      )}
    />
  );
};

export default memo(ListTopRatedMovies);
