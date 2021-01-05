import React from "react";
import PersonalPlants from './PersonalPlants';

const YourBox = (props) => {

  const mappedPersonalPlant = props.personalPlants.map((element, i) =>
    <PersonalPlants 
      key={i}
      plant={element}
    />
  )
  
  return (
    <div>
      <h2>YourBox w/ PersonalPlants in it -{">"} Your Garden Box!</h2>
      {mappedPersonalPlant}
    </div>
  )
}
export default YourBox;