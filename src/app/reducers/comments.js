import { ADD_COMMENT, SHOW_COMMENTS } from '../actions/actionTypes';

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
      return { ...state, comments: state.itemsById[action.payload].comments }
    default:
      return state;
  }
}