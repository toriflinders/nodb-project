const express = require('express')
const data = require('../data.json')
const nursCtrl = require('./Controllers/NurseryController.js')

  port = 4444,
  app = express();

app.use(express.json());

// Endpoints
// NurseryController
app.get('/api/garden/possibleplants', nursCtrl.getPossiblePlants);
app.get('/api/garden/personalplants', nursCtrl.getPersonalPlants);
app.post('/api/garden/personalplants', nursCtrl.addPersonalPlant);
app.put('/api/garden/personalplants/:id', nursCtrl.updatePersonalPlant);
app.delete('/api/garden/personalplants/:id', nursCtrl.deletePersonalPlant);



app.listen(port, () => console.log(`Server is listening on ${port}`));