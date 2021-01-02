import React, {Component} from "react";
import Header from "./Components/Header";
import FindPlant from "./Components/FindPlant";
import YourBox from "./Components/YourBox";
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {}
  }
  render(){
    return (
      <div className="App">
        <Header />
        <FindPlant />
        <YourBox />
      </div>
    );
  }
  
}

export default App;
