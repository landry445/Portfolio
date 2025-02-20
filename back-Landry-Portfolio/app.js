require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const mailRouter = require('./controllers/mailWs.js'); 

app.use(cors());
app.use(express.json());

app.use('/', mailRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
