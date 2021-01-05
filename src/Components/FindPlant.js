import React, {Component} from "react";
// import axios from 'axios';
// import data from '../data.json';
import LocalNursery from './LocalNursery';

class FindPlant extends Component {
  render(){
    // console.log(this.state.possiblePlants);
    // console.log(this.state.personalPlants);
    
    const mappedPlant = this.props.possiblePlants.map((element, i) =>
      <LocalNursery 
        key={i}
        plant={element}
        selectPlantFn={this.props.selectPlantFn}
      />
    )
    return(
      <div className='findplant'>
        <h2>FindPlant -{">"} Your Local Nursery!</h2>
        {mappedPlant}
      </div>
    )
  }
}
export default FindPlant;