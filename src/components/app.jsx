import React from 'react';
// importing files we want to use in app
import CityList from '../city_list';
import City from '../city';



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
