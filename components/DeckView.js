import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'


class DeckView extends React.Component{
  render(){

    addNewCard = () => {

    }
    return(
    <View style={styles.deckContainer}>
      <Text>Cards Deck</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CardsList')}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('NewCard')}>
        <Text>Add Card</Text>
      </TouchableOpacity>
    </View>
      )
  }
}

export default withNavigation(DeckView)

const styles = StyleSheet.create({
  deckContainer:{
  flex:1,
  justifyContent: 'center',
  alignContent: 'center'
 },})

