// formRoutes.js

// Import necessary modules
const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');

// Define routes
router.post('/submit-form', submitForm);

// Export the router
module.exports = router;
