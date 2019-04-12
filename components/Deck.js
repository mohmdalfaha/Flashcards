import React from 'react'
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'

class Deck extends React.Component{
  render(){
    const {title, cards} = this.props.data
    return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.deckContainer} onPress={() => this.props.navigation.navigate('DeckView')}>
           <MaterialCommunityIcons style={styles.addBtn} name="cards" size={50} />
           <Text style={{paddingTop: 15}}>{title}</Text>
           <Text >{cards.length}</Text>
      </TouchableOpacity>
    </ScrollView>
    )
  }
}

export default withNavigation(Deck)

const styles = StyleSheet.create({
  container:{
  paddingTop: 25,
  flex:1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',

 },
  deckContainer:{
  flex:1,
  flexDirection: 'row',
  alignContent:'center',
  justifyContent:'center',

},
})
