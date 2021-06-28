const express = require('express');
const cors = require('cors');
const devsRoute = require('./routes/devs');

const app = express();
app.use(express.json());
app.use(cors());
app.use(devsRoute);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
