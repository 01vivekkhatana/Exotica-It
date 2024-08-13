const express = require('express');
const multer = require('multer');
const Hero = require('../models/home/heroModel');
const router = express.Router();
const path = require('path');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../exotica-app/public'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/hero', upload.array('images', 10), async (req, res) => {
    try {
        const { heading, subheading, buttonText, image } = req.body;
        const images = req.files.map(file => `/${file.filename}`);
        const removedImages = req.body.removedImages || [];

        let heroData = await Hero.findOne();

        if (heroData) {
            // Update existing hero data
            heroData.heading = heading;
            heroData.subheading = subheading;
            heroData.buttonText = buttonText;
            heroData.image = image || heroData.image;

            // Remove specified images
            removedImages.forEach((imageUrl) => {
                heroData.images = heroData.images.filter(img => img !== imageUrl);
            });

            // Add new images
            heroData.images = heroData.images.concat(images);
        } else {
            // Create new hero data
            heroData = new Hero({
                heading,
                subheading,
                buttonText,
                image,
                images
            });
        }

        await heroData.save();
        res.status(200).json(heroData);
    } catch (error) {
        res.status(500).json({ error: 'Error processing hero data' });
    }
});


router.get('/hero', async (req, res) => {
    try {
        const heroData = await Hero.findOne();

        if (!heroData) {
            return res.status(404).json({ error: 'Hero data not found' });
        }

        res.status(200).json(heroData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching hero data' });
    }
});

module.exports = router;
