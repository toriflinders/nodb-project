const data = require('../../data.json')

let personalPlants = [];
let id = 1;

module.exports = {
  getPersonalPlants: (req, res) => {
    // console.log(personalPlants)
    res.status(200).send(personalPlants)
  },
  getPossiblePlants: (req, res) => {
    // console.log(data)
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
  },
  updatePersonalPlant: (req, res) => {
    const {id} = req.params,
          {name} = req.body;
    let editPlant = personalPlants.find(element => element.id === +id);
    editPlant.name = name;
    res.status(200).send(personalPlants);
  },
  deletePersonalPlant: (req, res) => {
    const {id} = req.params;

    let index = personalPlants.findIndex(element => element.id === +id);
    personalPlants.splice(index, 1);
    res.status(200).send(personalPlants);
  }
}