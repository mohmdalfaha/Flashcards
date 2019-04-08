import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DeckList from './components/DeckList'
import {MaterialIcons} from '@expo/vector-icons'
import {createStackNavigator,createAppContainer } from 'react-navigation'

import Home from './components/Home'
import AddDeck from './components/AddDeck'


const AppContext = React.createContext();

 class App extends React.Component {
  render() {
    return (
      <AppContext.Provider>
      <View style={styles.container}>
        <Home navigation={this.props.navigation} />
      </View>
      </AppContext.Provider>
    );
  }
}

const Stack = createStackNavigator({
  Home: {
    screen: Home,
  },
  AddDeck: {
    screen: AddDeck,
  }
})

export default createAppContainer(Stack);

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
