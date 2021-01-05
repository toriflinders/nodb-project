const data = require('../../data.json')

let personalPlants = [];
let id = 0;

module.exports = {
  getPersonalPlants: (req, res) => {
    console.log(personalPlants)
    res.status(200).send(personalPlants)
  },
  getPossiblePlants: (req, res) => {
    console.log(data)
    res.status(200).send(data)
  },
  addPersonalPlant: (req, res) => {
    const {name, sunNeeds} = req.body;

    let plant = {
      id: id,
      name: name, 
      sunNeeds: sunNeeds
    }
    personalPlants.push(plant);
    id++;
    res.status(200).send(personalPlants)
  }
  // updatePersonalPlant: (req, res) => {
  //   const {id} = req.params;

  //   let editPlant = possiblePlants.find(element => element.id === +id);
  //   editPlant = {
  //     id: editPlant.id,
  //     name: req.body.name || editPlant.name,
  //     sunNeeds: req.body.sunNeeds || editPlant.sunNeeds
  //   }
  //   res.sendStatus(200);
  // },
  // deletePersonalPlant: (req, res) => {
  //   const {id} = req.params;

  //   let plantId = possiblePlants.findIndex(element => element.id === +id);
  //   possiblePlants.splice(plantId, 1);
  //   res.sendStatus(200);
  // }
}