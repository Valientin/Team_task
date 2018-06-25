const initialsState = {
  users: [1, 2, 3],
  usersById: {
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
    case 'SET_IITEMS':
      return { ...state, users: state.usersById }
    default:
      return state;
  }
  return state;
}