import React, {Component} from 'react';

class PersonalPlants extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing: false,
      nameInput: ''
    }
  }
  handleInput = (val) => {
    this.setState({nameInput: val})
  }
  handleToggle = () => {
    this.setState({isEditing: !this.state.isEditing})
  }
  handleEdit = (id) => {
    this.props.editPlantFn(id, this.state.nameInput)
    this.handleToggle();
  }
  render(){
    return(
      <div>
        {this.state.isEditing
        ? (
          <div>
            <input 
                value={this.state.nameInput}
                onChange={e => this.handleInput(e.target.value)}/>
              <button onClick={() => this.handleEdit(this.props.plant.id)}>Submit</button>
          </div>
        )
        : (
          <div>
            <button onClick={this.handleToggle}>Edit Name</button>
            <p>{this.props.plant.name}</p>
          </div>
        )}
        <p>{this.props.plant.name}      {this.props.plant.sunNeeds}</p>
        <button onClick={() => this.props.deletePersonalPlantFn(this.props.plant.id)}>Unplant</button>
      </div>
    )
  }
}
export default PersonalPlants;