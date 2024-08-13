const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    subheading: {
        type: String,
        required: true,
    },
    buttonText: {
        type: String,
        required: true,
    },
    image: {
        type: String, // This could be the main image URL or path
    },
    images: [
        {
            type: String, // Array of image URLs or paths
        }
    ]
}, { timestamps: true });

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;

