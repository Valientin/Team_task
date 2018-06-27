import { ADD_COMMENT, SHOW_COMMENTS, SET_ACTIVE } from '../actions/actionTypes';

import {initialState} from './items'

export function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        items: state.items.concat([action.payload.id]),
        itemsById: Object.assign(state.itemsById, action.payload.newItem)
      }
    case SHOW_COMMENTS:
      return { ...state, 
        activeComments: {
          comments: state.itemsById[action.payload].comments,
          id: Object.keys(state.itemsById).indexOf(action.payload) + 1
        }
      }
    default:
      return state;
  }
}