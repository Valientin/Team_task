import { ADD_ITEM, SET_ACTIVE } from '../actions/actionTypes';

const initialState = {
  items: [1, 2],
  itemsById: {
    1: {
      name: 'First items with custom name',
      comments: [],
      active: false
    },
    2: {
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