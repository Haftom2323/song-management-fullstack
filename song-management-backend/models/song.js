const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    album: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Song', songSchema);