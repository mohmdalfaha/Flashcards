import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions/index'
import data from '../helpers/data'

function decks (state = data, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
      case ADD_DECK:
      const newDeck = {
        [action.title]: {
          title: action.title,
          cards: []
        }
      }
      return {
        ...state,
        ...newDeck
      }
      case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: state[action.title].questions.concat([action.card])
        }
      }
    default :
      return state
  }
}

export default decks