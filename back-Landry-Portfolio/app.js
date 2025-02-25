require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mailRouter = require('./controllers/mailWs.js');

const app = express();
const port = process.env.PORT || 3000;


app.set('trust proxy', 1);

const corsOptions = {
  origin: ['https://www.ldupont-portfolio.fr'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(helmet());

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, 
  message: "Trop de requêtes, réessayez plus tard.",
});
app.use('/email', emailLimiter);

app.use('/', mailRouter);

app.listen(port, () => {
  console.log(`Serveur sécurisé lancé sur le port ${port}`);
});
