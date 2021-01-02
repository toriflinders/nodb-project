import React, {Component} from "react";
import Header from "./Components/Header";
import FindPlant from "./Components/FindPlant";
import YourBox from "./Components/YourBox";
import data from './data'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      possiblePlants: data,
    }
  }
  render(){
    console.log(this.state.possiblePlants)
    return (
      <div className="App">
        <Header />
        <YourBox />
        <FindPlant />
      </div>
    );
  }
  
}

export default App;
