// TODO: add and export your own actions
import CityList from '../city_list';

export function setCities(){
// I should create somewhere cities folder with cities
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}
