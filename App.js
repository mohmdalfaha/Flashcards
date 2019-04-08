import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DeckList from './components/DeckList'
import {MaterialIcons} from '@expo/vector-icons'

const AppContext = React.createContext();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={console.log('pressed')}>
           <MaterialIcons style={styles.addBtn}name="add-to-photos" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent: 'center',
  },
  addContainer:{
    justifyContent:'flex-end',
    flexDirection: 'column',
  },
  addBtn: {
    alignSelf: 'flex-end',
    paddingRight: 15,
  }
});
