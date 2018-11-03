import app from './app';
import conf from './conf';

// Start Express Server
const server = app.listen(conf.app.port, () => {
  console.log(`App is running at http://localhost:${conf.app.port} in development mode`);
  console.log('Press CTRL-C to stop');
});

export default server;
