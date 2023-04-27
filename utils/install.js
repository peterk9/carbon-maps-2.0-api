const concurrently = require('concurrently');
const path = require('path');

concurrently(
  [
    {
      command: 'npm install',
      name: 'accounts',
      cwd: path.resolve(__dirname, '../data-center-locations-service'),
      prefixColor: 'blue',
    },
    {
      command: 'npm install',
      name: 'listings',
      cwd: path.resolve(__dirname, '../carbon-maps-graphql-service'),
      prefixColor: 'magenta',
    },
    // {
    //   command: 'npm install',
    //   name: 'bookings',
    //   cwd: path.resolve(__dirname, '../services/bookings'),
    //   prefixColor: 'green',
    // },
  ],
  {
    prefix: 'name',
    restartTries: 3,
  }
);
