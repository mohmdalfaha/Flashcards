import React from 'react'
import {ScrollView, Text, StyleSheet} from 'react-native'

import Deck from './Deck'
import {getInitialData} from '../helpers/data'

class DeckList extends React.Component{
  render(){
    const decks = getInitialData()
    return(
    <ScrollView contentContainerStyle={styles.deckContainer}>
        {Object.keys(decks).map((deck) =>(
                <Deck key={deck}data={decks[deck]}/>
              ))}
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