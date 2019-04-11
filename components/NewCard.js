import React from 'react'
import {View, Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'


class NewCard extends React.Component{
  render(){

    addCard = () => {
      this.props.navigation.navigate('CardsList')
    }
    return(
    <View style={styles.deckContainer}>
      <Text>Question:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type your Question!"
        />
      <Text>Answer:</Text>
      <TextInput
          style={{height: 40}}
          placeholder="Type your answer!"
        />
      <TouchableOpacity onPress={this.addCard}>
        <Text>Add Card</Text>
      </TouchableOpacity>
    </View>
      )
  }
}

export default withNavigation(NewCard)

const styles = StyleSheet.create({
  deckContainer:{
  flex:1,
  justifyContent: 'center',
  alignContent: 'center'
 },})

