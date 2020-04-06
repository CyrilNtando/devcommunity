express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

//MIDDLEWARE

//
//body-parser,reading data from body into req.body
app.use(express.json({ limit: '1000kb' })); //parse data less than 10kb

//MOUNT ROUTES
app.use('/api/v1/users', userRoutes);
module.exports = app;
