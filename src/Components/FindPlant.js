import React, {Component} from "react";
import LocalNursery from './LocalNursery';

class FindPlant extends Component {
  constructor(){
    super();

    this.state = {}

  }
  render(){
    <LocalNursery />
    return(
      <div>
        <h2>FindPlant -> Your Local Nursery!</h2>
      </div>
    )
  }
}
export default FindPlant;