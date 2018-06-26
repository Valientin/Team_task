import { ADD_ITEM, SET_ACTIVE } from '../actions/actionTypes';

const initialState = {
  items: ['f42145fs', 'r2351dfad'],
  itemsById: {
    'f42145fs': {
      name: 'First items with custom name',
      comments: [],
      active: false
    },
    'r2351dfad': {
      name: 'Second item is active',
      comments: [],
      active: true
    }
  }
}

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
    default:
      return state;
  }
}