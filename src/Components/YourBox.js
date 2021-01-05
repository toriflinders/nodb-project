import React from "react";
import PersonalPlants from './PersonalPlants';

const YourBox = props => {
  const mappedPersonalPlant = props.personalPlants.map((element, i) =>
    <PersonalPlants 
      key={i}
      plant={element}
      editPlantFn={props.editPlantFn}
      deletePersonalPlantFn={props.deletePersonalPlantFn}
    />
    )
  return (
    <div>
      <h2>YourBox w/ PersonalPlants in it -{">"} Your Garden Box!</h2>
      <div className='garden'>
        {mappedPersonalPlant}
      </div>
    </div>
  )
}
export default YourBox;