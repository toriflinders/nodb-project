import React, {Component} from 'react';

class LocalNursery extends Component {
  handleAdd = () => {
    const {plant} = this.props;
    let newPlant = {
      name: plant.name,
      sunNeeds: plant.sunNeeds
    }
    this.props.selectPlantFn(newPlant)
  }
  render(){
    return (
      <div onClick={this.handleAdd}>
        <p>{this.props.plant.name} {this.props.plant.sunNeeds}</p>
      </div>
    )
  }
}
export default LocalNursery;