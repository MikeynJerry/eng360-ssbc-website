import { characters, characterList } from 'constants/characters'

const initialUIState = {
  rightJoyconColor: 'gray',
  leftJoyconColor: 'gray',
  mode: 'handheld'
}

export const UIReducer = (state = initialUIState, action) => {
  switch (action.type) {
    case 'CHANGE_RIGHT_COLOR':
      return Object.assign({}, state, { rightJoyconColor: action.payload })
    case 'CHANGE_LEFT_COLOR':
      return Object.assign({}, state, { leftJoyconColor: action.payload })
    case 'CHANGE_DISPLAY_MODE':
      return Object.assign({}, state, { mode: action.payload })
    default:
      return state
  }
}

const character =
  characterList[Math.floor(Math.random() * characterList.length)]

const initialCharacterState = characters[character]

export const CharacterReducer = (state = initialCharacterState, action) => {
  switch (action.type) {
    case 'SELECT_CHARACTER':
      return Object.assign({}, state, { ...action.payload })
    default:
      return state
  }
}

export const SubscribeReducer = (state = { start: '', period: '' }, action) => {
  switch (action.type) {
    case 'SUBSCRIBE':
      return action.payload
    default:
      return state
  }
}
