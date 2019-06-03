import React, { Component } from 'react';

//redux maging to connect adn bind
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';


function  mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { setCities: setCities }
  );
}

function mapStateToProps(state) {
  return {

  };
}

//03/06
class CityList extends component {
  componentWillMount() {
    this.props.setCities();
  }

  constructor(props){
    super(props);
  }
  render(){
    return (
      );
  }
}





//yesterdays code 02/06
class CityList extends Component {
  constructor(props){
    super(props);

  }

  render(){

    return(

      );
  }

}

//export default CityList;

export default connect(null, mapDispatchToProps)(CityList);
