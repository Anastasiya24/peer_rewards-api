import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.get('*', function (req, res) {
  res.sendStatus(404);
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
