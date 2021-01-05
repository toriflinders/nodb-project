const express = require('express')
const data = require('../data.json')
const nursCtrl = require('./Controllers/NurseryController.js')
// persCtrl = require('./Controllers/PersonalPlantsController'),
  port = 4444,
  app = express();

app.use(express.json());

// Endpoints
app.get('/api/garden', (req, res) => {
  res.status(200).send(data)
})

// NurseryController
app.get('/api/garden/possibleplants', nursCtrl.getPossiblePlants);
app.get('/api/garden/personalplants', nursCtrl.getPersonalPlants);
app.post('/api/garden/personalplants', nursCtrl.addPersonalPlant);
// app.put('/api/personalplants/:id', nursCtrl.updatePersonalPlant);
// app.delete('/api/personalplants/:id', nursCtrl.deletePersonalPlant);

// PersonalPlantsController

app.listen(port, () => console.log(`Server is listening on ${port}`));