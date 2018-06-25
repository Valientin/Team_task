const initialState = {
  items: [
    {
      title: 'First items',
      comments: [],
      active: false
    },
    {
      title: 'First items',
      comments: [],
      active: true
    }
  ]
}

export function items(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}