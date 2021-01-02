const express = require('express'),
  port = 3111,
  app = express();

app.use(express.json());

app.listen(port, () => console.log(`Server is listening on ${port}`));