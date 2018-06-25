
const initialState = {
  items: [1, 2, 3],
  itemsById: [
    {
      title: 'First items',
        comments: [],
        active: false
    },
    {
      title: 'Second items',
      comments: [],
      active: true
    }
  ]
}

export function items(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}