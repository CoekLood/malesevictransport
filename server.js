const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const app = express();
const port = 3000;

app.use(express.json()); // For parsing JSON body

// Route to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, phone, email, address, message } = req.body;

    const params = {
        service_id: process.env.EMAILJS_SERVICE_ID, // Using environment variable
        template_id: process.env.EMAILJS_TEMPLATE_ID, // Using environment variable
        user_id: process.env.EMAILJS_USER_ID, // Using environment variable
        template_params: {
            name,
            phone,
            email,
            address,
            message
        }
    };

    try {
        // Sending request to EmailJS API
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', params, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
