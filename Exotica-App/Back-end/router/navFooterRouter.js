// Import necessary dependencies
const express = require('express');
const router = express.Router();
const Data = require('../models/NF'); // Assuming you have a Email model defined

// Route to handle saving emails
router.post('/', async (req, res) => {
    const { email, phone, address, socialURL, description } = req.body;
    
    // Check if required fields are present
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    
    try {
        // Save the email to the database
        const newEmail = new Data({ email, phone, address, socialURL, description });
        await newEmail.save();

        // Respond with success message
        res.status(200).json({ message: 'Email saved successfully' });
    } catch (error) {
        console.error('Error saving email:', error);
        // Respond with error message
        res.status(500).json({ message: 'Error saving email' });
    }
});

module.exports = router;
