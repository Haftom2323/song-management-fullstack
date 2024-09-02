const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const songRoutes = require('./routes/songRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.use('/api', songRoutes);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });