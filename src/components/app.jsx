import React from 'react';
// importing files we want to use in app
import CityList from './city_list';
import City from './city';

//fake DB
const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];


const App = () => {
  return (
    <div className="app">

     <div className="list-group-item">
        <CityList />

        </div>

        <div className="cities">
        <City />

        </div>


    </div>
  );
};

export default App;
