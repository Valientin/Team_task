const initialsState = {
  items: [1, 2, 3],
  itemsById: {
      1: {
        title: 'First items',
        comments: [],
        active: false
      },
      2: {
        title: 'Second items',
        comments: [],
        active: true
      },
    }
}

export function items(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ITEMS':
      return { ...state, items: state.itemsById }
    default:
      return state;
  }
  return state;
}