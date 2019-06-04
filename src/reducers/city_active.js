const cityReducer = (state, action) => {
if (state === null){
  return [];// return an empy array.
}

};

export default cityReducer;


export default function(state, action) {
  switch(action.type) {
    case 'SET_ACTIVE_CITY':
    return action.payload;
    default:
    return state;
  }
}
