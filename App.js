import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import {createStackNavigator,createAppContainer } from 'react-navigation'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

import Home from './components/Home'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import NewCard from './components/NewCard'
import CardsList from './components/CardsList'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
         <StatusBar backgroundColor={"#192a56"}/>
          <Home navigation={this.props.navigation} />
        </View>
      </Provider>
    );
  }
}

const Stack = createStackNavigator({
  Home: {
    screen: Home,
  },
  AddDeck: {
    screen: AddDeck,
  },
  NewCard: {
    screen: NewCard,
  },
  CardsList: {
    screen: CardsList
  },
  DeckView: {
    screen: DeckView,
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
