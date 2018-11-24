import express from 'express';
const app = express();
import router from './routes/routes';
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});

app.get('/', (req, res) => {
  res.sendfile('src/index.html');
});

app.use(router);

app.use((req, res, next) => {
  let error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = app;