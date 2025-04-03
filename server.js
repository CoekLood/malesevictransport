// server.js
const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com'); // EmailJS SDK
require('dotenv').config(); // To load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// EmailJS configuration (using environment variables to hide API keys)
const { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = process.env;

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, phone, email, address, message } = req.body;

    // Prepare the parameters to send to EmailJS
    const params = {
        name,
        phone,
        email,
        address,
        message,
    };

    // Send the email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_USER_ID)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        })
        .catch(error => {
            console.error('FAILED...', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
