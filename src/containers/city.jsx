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
