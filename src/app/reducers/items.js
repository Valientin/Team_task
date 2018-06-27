import { ADD_ITEM, SET_ACTIVE, DELETE_ITEM } from '../actions/actionTypes';

const initialState = {
  items: ['f42145fs', 'r2351dfad'],
  itemsById: {
    'f42145fs': {
      name: 'First items with custom name',
      comments: [
        {
          logo : "yellow",
          text : ['asd11111111111111ld']
        },
        {
          logo : "blue",
          text : ['aфівфівфівфівфівфвфівdddd']
        },
      ],
      active: false
    },
    'r2351dfad': {
      name: 'Second item is active',
      comments:[
        {
          logo : "yellow",
          text : ['asdsdjasdladshajldhjld']
        },
        {
          logo : "blue",
          text : ['asdddddddddddddd']
        },
      ],
      active: true
    }
  }
}
export {initialState}

export function items(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat([action.payload.id]),
        itemsById: Object.assign(state.itemsById, action.payload.newItem)
      }
    case SET_ACTIVE:
      return {
        ...state
      }
    case DELETE_ITEM:
      return Object.assign({}, state, {
        items: [...state.items.filter(item => item !== action.payload)],
      });
    default:
      return state;
  }
}