import app from './app';

// Start Express Server
const server = app.listen('8080', () => {
  console.log('App is running at http://localhost:8080 in development mode');
  console.log('Press CTRL-C to stop');
});

export default server;
