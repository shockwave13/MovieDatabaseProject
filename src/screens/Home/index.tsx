import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';

export default function Home(): ReactElement {
  return <SafeAreaView style={styles.safeAreaViewStyle}></SafeAreaView>;
}
