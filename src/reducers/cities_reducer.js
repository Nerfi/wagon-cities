const citiesReducer = (state, action) => {
  if(state === undefined) {
    //reducer initialisation
    return [];
  }

  //handle some actions
};

export default citiesReducer;



//03/06
export default function (state, action) {
  switch (action.type) {
    case 'SET_CITIES':
    return action.payload;
    default:
    return state;
  }
}
