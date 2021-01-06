import React, {Component} from 'react';

class LocalNursery extends Component {
  handleAdd = () => {
    const {plant} = this.props;
    let newPlant = {
      name: plant.name,
      sunNeeds: plant.sunNeeds,
      image: plant.image
    }
    this.props.selectPlantFn(newPlant);
  }
  render(){
    return (
      <div className='localnurs'>
        <p>{this.props.plant.name}</p>
        <p>{this.props.plant.sunNeeds}</p>
        
        <img src={this.props.plant.image} alt={this.props.plant.name}></img>
        
        <button onClick={this.handleAdd}>Pick Plant</button>
        
      </div>
      
    )
  }
}
export default LocalNursery;