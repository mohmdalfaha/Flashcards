import React from 'react'
import {TextInput, View, Text, StyleSheet, button, TouchableOpacity} from 'react-native'


class AddDeck extends React.Component{
  render(){
    return(
    <View style={styles.deckContainer}>
      <Text>Deck</Text>
      <Text>
        Add Deck
      </Text>
      <TextInput
          style={{height: 40}}
          placeholder="Type Deck title!"
        />
     <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Text>Add Deck</Text>
      </TouchableOpacity>
    </View>
      )
  }
}

export default AddDeck

const styles = StyleSheet.create({
  deckContainer:{
  flex:1,
  justifyContent: 'center',
  alignContent: 'center'
 },})
