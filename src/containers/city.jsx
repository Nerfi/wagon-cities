import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { setActiveCity: setActiveCity },
  dispatch
  );
}


class City extends  Component {
  constructor(props){
    super(props);

    //defines initial state
    this.state = { clicked: false };

  }

  handleClick() {
    this.setState({ clicked: true});
  }

  onClick() {
   this.props.setActiveCity
  }

  render() {

    return(
      <div>



      </div>



      );
  }
}


//export default City;

export default connect(null, mapDispatchToProps)(City);


//lewagon solution

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// we import the function
import selectCity from '../actions/index';

const City = (props) => {
  return(
    <li
    className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>

    );
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);

}


export default connect(null, mapStateToProps)(city);

