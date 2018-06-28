import { ADD_ITEM, SET_ACTIVE, DELETE_ITEM, ADD_COMMENT, SHOW_COMMENTS } from '../actions/actionTypes';

const initialState = {
  items: ['f42145fs', 'r2351dfad'],
  comments: false,
  itemsById: {
    'f42145fs': {
      name: 'First items with custom name',
      comments: [
        {
          logo : "#f18544",
          text : 'First comment(First item)'
        },
        {
          logo : "#4e84e8",
          text : 'Second comment(First item)'
        },
      ],
      active: false
    },
    'r2351dfad': {
      name: 'Second item is active',
      comments:[
        {
          logo : "#f18544",
          text : 'First comment(Second item)'
        },
        {
          logo : "#4e84e8",
          text : 'Second comment(Second item)'
        },
      ],
      active: false
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
      const itemsActive = state.itemsById;
      state.items.map((item => {
        if(item === action.payload){
          return itemsActive[item].active = true;
        }
        return itemsActive[item].active = false; 
      }))
      return { ...state, itemsById: Object.assign({}, itemsActive), comments: true, activeComments : {} }
    case DELETE_ITEM:
      const newItemsById = state.itemsById;
      state.items.map((item => {
        return newItemsById[item].active = false; 
      }))
      delete newItemsById[action.payload];
      return {
        ...state,
        items: [...state.items.filter(item => item !== action.payload)],
        itemsById: Object.assign({}, newItemsById),
        comments: false
      };
    case ADD_COMMENT:
      const newItemsWithComment = state.itemsById;
      newItemsWithComment[action.payload.id].comments.push(action.payload.newComment);
      return {
        ...state,
        itemsById : Object.assign({}, newItemsWithComment)
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