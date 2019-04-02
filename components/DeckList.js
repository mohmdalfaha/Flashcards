import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


class DeckList extends React.Component{
  render(){
    return(
    <View style={styles.deckContainer}>
      <Text>Deck</Text>
    </View>
      )
  }
}

const styles = StyleSheet.create({
  deckContainer:{
  flex:1,
  justifyContent: 'center',
  alignContent: 'center'
 },
  deckTitle
  })
export default DeckList