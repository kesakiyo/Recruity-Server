import * as express from 'express';

// Create Express server;
const app = express();

app.get('/', (req, res, next) => {
  res.send('hello world');
});

export default app;
