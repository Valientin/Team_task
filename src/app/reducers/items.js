import { ADD_ITEM, SET_ACTIVE, DELETE_ITEM } from '../actions/actionTypes';

const initialState = {
  items: ['f42145fs', 'r2351dfad'],
  comments: false,
  itemsById: {
    'f42145fs': {
      name: 'First items with custom name',
      comments: [
        {
          logo : "#f18544",
          text : 'asd11111111111111ld'
        },
        {
          logo : "#4e84e8",
          text : 'aфівфівфівфівфівфвфівdddd'
        },
      ],
      active: false
    },
    'r2351dfad': {
      name: 'Second item is active',
      comments:[
        {
          logo : "#f18544",
          text : 'asdsdjasdladshajldhjld'
        },
        {
          logo : "#4e84e8",
          text : 'asdddddddddddddd'
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
      return { ...state, itemsById: Object.create(itemsActive), comments: true, activeComments : {} }
    case DELETE_ITEM:
      return Object.assign({}, state, {
        items: [...state.items.filter(item => item !== action.payload)],
      });
    default:
      return state;
  }
}