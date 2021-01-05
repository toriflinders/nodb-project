import React, {Component} from 'react';

class PersonalPlants extends Component {
  
  render(){
    return(
      <div>
        <p>{this.props.plant.name} {this.props.plant.sunNeeds}</p>
      </div>
    )
  }
}
export default PersonalPlants;