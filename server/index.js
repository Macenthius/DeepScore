const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors());

// Importing routes
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log('Database not Connected', err));

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes setup
app.use('/auth', authRoutes); // Auth routes
app.use('/forms', formRoutes); // Form routes

// Starting the server
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
