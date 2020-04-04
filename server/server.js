/***SERVER TASKS */
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/config.env' });
const PORT = process.env.PORT;
express = require('express');

process.on('uncaughtException', (error) => {
  console.log(error.name, error.message);
  console.log('UNHANDLED Exception! Shutting down...');
  process.exit(1);
});
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT} `);
});

process.on('unhandledRejection', (error) => {
  console.log(error.name, error.message);
  console.log('UNHANDLED REJECTION! Shutting down...');

  server.close(() => {
    process.exit(1);
  });
});
