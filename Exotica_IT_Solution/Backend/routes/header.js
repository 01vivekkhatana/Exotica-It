const express = require('express');
const path = require('path');
const Header = require('../models/Header');
const multer = require('multer');
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the absolute path to the frontend public directory
    cb(null, path.join(__dirname, '../../exotica-app/public'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// POST route to create or update header
router.post('/', upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'flag_logos' }]), async (req, res) => {
  try {
    let { buttons, contact } = req.body;
    const logo = req.files.logo ? `/${req.files.logo[0].filename}` : null;
    const flagLogos = req.files.flag_logos ? req.files.flag_logos.map(file => `/${file.filename}`) : [];

    // Log the received data for debugging
    console.log('Received Data:', { buttons, contact, logo, flagLogos });

    // Parse buttons if it's a string
    if (typeof buttons === 'string') {
      try {
        buttons = JSON.parse(buttons);
      } catch (error) {
        console.error('Failed to parse buttons:', error);
        return res.status(400).json({ error: 'Invalid format for buttons' });
      }
    }

    if (typeof contact === 'string') {
      try {
        contact = JSON.parse(contact);
      } catch (error) {
        console.error('Failed to parse contact:', error);
        return res.status(400).json({ error: 'Invalid format for contact' });
      }
    }

    // Ensure buttons is an array of objects
    if (!Array.isArray(buttons) || !buttons.every(btn => typeof btn === 'object')) {
      return res.status(400).json({ error: 'Buttons must be an array of objects' });
    }
    if (!Array.isArray(contact) || !contact.every(cont => typeof cont === 'object')) {
      return res.status(400).json({ error: 'Contact must be an array of objects' });
    }

    // Update contact with flag logos
    contact = contact.map((cont, index) => ({
      ...cont,
      flag_logo: flagLogos[index] || cont.flag_logo,
    }));

    let header = await Header.findOne();
    if (header) {
      header.logo = logo || header.logo;
      header.buttons = buttons;
      header.contact = contact;
      await header.save();
    } else {
      header = new Header({ logo, buttons, contact });
      await header.save();
    }

    res.status(200).json(header);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to fetch header data
router.get('/', async (req, res) => {
  try {
    const header = await Header.findOne();
    if (!header) {
      // Send an empty structure if no header is found
      return res.status(200).json({
        logo: '',
        buttons: [],
        contact: []
      });
    }
    res.status(200).json(header);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
