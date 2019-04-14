import { AsyncStorage } from '@react-native-community/async-storage';
import { data } from './data'

const APP_STORAGE_KEY = 'MobileFlashCards:decks'


export getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(APP_STORAGE_KEY)
    if(decks !== null) {
      return JSON.parse(decks)
    }
  } catch(e) {
    alert('There was an eroor fetching decks!!')
  }
}


export saveDeckTitle = async (title) => {
  try {
    await AsyncStorage.mergeItem(APP_STORAGE_KEY, JSON.stringify({
      [title]: {
         titile: title,
         cards: []
      }
    }))
  } catch (e) {
    alert('Error adding deck')
  }
}

export addCardToDeck = async () => {
  try {
    await AsyncStorage.setItem(APP_STORAGE_KEY, title, card)
  } catch (e) {
     alert('Error adding card')
  }
}


