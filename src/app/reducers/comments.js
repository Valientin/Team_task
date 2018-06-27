import { ADD_COMMENT, SHOW_COMMENTS, SET_ACTIVE } from '../actions/actionTypes';

import {initialState} from './items'

export function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
    const newItemsWithComment = Object.create(state.itemsById)
    console.log(action.payload.newComment)
    newItemsWithComment[action.payload.id].comments.push(action.payload.newComment);

      return {
        ...state,
        itemsById : Object.create(newItemsWithComment)
      }
      
    case SHOW_COMMENTS:
      return { ...state, 
        activeComments: {
          comments: state.itemsById[action.payload].comments,
          id: Object.keys(state.itemsById).indexOf(action.payload) + 1,
          keyId: action.payload
        }
      }
    default:
      return state;
  }
}