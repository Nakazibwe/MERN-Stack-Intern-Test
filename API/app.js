// Required dependencies.
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// Database connection
const { connectDB } = require('./config/database');

connectDB();

// Express app
const app = express();

// Port
const port = process.env.PORT;

// Middleware.
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes.
app.use('/api/users', require('./app/routes/user.routes'));
app.use('/api/properties', require('./app/routes/property.routes'));

app.listen(port, () => {
  console.log(`API running on ${port}`);
});
