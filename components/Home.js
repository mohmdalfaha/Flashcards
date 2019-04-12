import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

import DeckList from './DeckList'
import {MaterialIcons} from '@expo/vector-icons'

import AddDeck from './AddDeck'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <DeckList style={styles.deckList} />
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDeck')}>
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
    flexDirection:'row',
    justifyContent: 'center',
  },
  deckList:{
    justifyContent:'center',
    alignContent: 'center',
  },
  addContainer:{
    flex:1,
    justifyContent:'flex-end',
    flexDirection: 'column',
  },

  addBtn: {
    alignSelf: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30
  }
});
