const submitForm = async (req, res) => {
    try {
      const formData = req.body;
      // Process the form data, e.g., save it to a database
      console.log('Form Data:', formData);
      res.status(200).send('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).send('Internal server error');
    }
  };
  
  module.exports = { submitForm };
  