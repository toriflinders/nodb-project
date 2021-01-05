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

  getPersonalPlants = () => {
    axios.get('/api/garden/personalplants')
      .then(res => {
        this.setState({personalPlants: res.data})
      })
      .catch(err => console.log(err))
  }
  
  getPossiblePlants = () => {
    axios.get('/api/garden/possibleplants')
      .then(res => {
        this.setState({possiblePlants: res.data})
      })
      .catch(err => console.log(err));
  }
  addPersonalPlant = (newPlant) => {
    axios.post('/api/garden/personalplants', newPlant)
      .then(res => {
        this.setState({
          personalPlants: res.data,
        })
      })
      .catch(err => console.log(err))
  }
  


  render(){
    console.log(this.state.personalPlants);
    console.log(this.state.possiblePlants);
    
    return (
      <div className="App">
        <section className="Header">
          <Header />
        </section>
        <section className="YourBox">
          <YourBox personalPlants={this.state.personalPlants}/>
        </section>
        <section className="FindPlant">
          <FindPlant 
            possiblePlants={this.state.possiblePlants}
            selectPlantFn={this.addPersonalPlant}
            />
        </section>
        
      </div>
    );
  }
  
}

export default App;
// possiblePlants={this.state.possiblePlants.data} data={data}