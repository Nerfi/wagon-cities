// lewagon solution and flow nº 2, the action flows
//trhrough all of the reducers

export default function(state = null, action) {
  switch (action.type) {
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
