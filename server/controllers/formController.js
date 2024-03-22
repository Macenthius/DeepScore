const FormSubmission = require('../models/FormSubmission');

const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // Create a new instance of FormSubmission
    const formSubmission = new FormSubmission(formData);

    // Save the form submission to MongoDB
    await formSubmission.save();

    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { submitForm };
