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
      <h2>Your Garden Box!</h2>
      <h3>Nurture Your Plants!</h3>
      <div className='yourbox'>
        {mappedPersonalPlant}
      </div>
    </div>
  )
}
export default YourBox;