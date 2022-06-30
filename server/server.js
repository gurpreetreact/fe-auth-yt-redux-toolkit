const express = require('express');
const dotenv = require('dotenv').config();
const { env } = process

const PORT = env.PORT || 5000;

const app = express();

// adding middleware to access req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

