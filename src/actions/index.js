// TODO: add and export your own actions
import CityList from '../city_list';

export function setCities(){
// I should create somewhere cities folder with cities
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}


// idk if I have to import something for this action

 export function setActiveCity(city) {
     return {
      type: 'SET_ACTIVE_CITY',
      payload: city
     }
 }
