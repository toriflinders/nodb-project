import React, {Component} from "react";
import Header from "./Components/Header";
import FindPlant from "./Components/FindPlant";
import YourBox from "./Components/YourBox";
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      personalPlants: [],
      possiblePlants: []
    }
  }
  componentDidMount(){
    this.getPossiblePlants();
    this.getPersonalPlants();
  }
 getPossiblePlants = () => {
    axios.get('/api/garden/possibleplants')
      .then(res => {
        this.setState({possiblePlants: res.data})
      })
      .catch(err => console.log(err));
  }
  getPersonalPlants = () => {
    axios.get('/api/garden/personalplants')
      .then(res => {
        this.setState({personalPlants: res.data})
      })
      .catch(err => console.log(err))
  }
  addPersonalPlant = (newPlant) => {
    axios.post('/api/garden/personalplants', newPlant)
      .then(res => {
        this.setState({personalPlants: res.data})
      })
      .catch(err => console.log(err))
  }
  updatePersonalPlant = (id, editPlant) => {
    let body = {name: editPlant};

    axios.put(`/api/garden/personalplants/${id}`, body)
      .then(res => {
        this.setState({personalPlants: res.data});
      })
      .catch(err => console.log(err));
  }
  deletePersonalPlant = (id) => {
    axios.delete(`/api/garden/personalplants/${id}`)
      .then(res => {
        this.setState({personalPlants: res.data});
      })
      .catch(err => console.log(err))
  }
  render(){
    console.log(this.state.personalPlants);
    console.log(this.state.possiblePlants);
    
    return (
      <div className="App">
        <Header />
        <YourBox 
          personalPlants={this.state.personalPlants} 
          editPlantFn={this.updatePersonalPlant}
          deletePersonalPlantFn={this.deletePersonalPlant}
        />
        <div>
          <FindPlant 
            possiblePlants={this.state.possiblePlants}
            selectPlantFn={this.addPersonalPlant}
          />
        </div>
        
      </div>
    );
  }
}
export default App;
