import React from 'react'
import {ScrollView, Text, StyleSheet} from 'react-native'

import Deck from './Deck'

class DeckList extends React.Component{
  render(){
    return(
    <ScrollView contentContainerStyle={styles.deckContainer}>
        <Deck />
    </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  deckContainer:{
  justifyContent: 'space-between',
  alignContent: 'center'
 },})
export default DeckList