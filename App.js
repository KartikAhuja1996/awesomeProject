//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text,Linking, Platform,StatusBar } from 'react-native';

import {colors} from './src/utils/colors';
import { Focus } from './src/features/Focus';

export default function App() {
  return (
    <View style={styles.container}>
      <Focus/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
    paddingTop:Platform.OS = "android" ? StatusBar.currentHeight : 0,
  }
});
