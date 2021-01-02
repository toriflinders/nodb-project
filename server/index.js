const express = require('express'),
// nursCtrl = require('./Controllers/NurseryController),
// persCtrl = require('./Controllers/PersonalPlantsController)
  port = 3111,
  app = express();

app.use(express.json());

// NurseryController Endpoints


// PersonalPlantsController Endpoints

app.listen(port, () => console.log(`Server is listening on ${port}`));