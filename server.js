const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const ProductRoute = require('./router/ProductRoute');

const PORT = process.env.PORT || 5000;

const app = express();

// CORS configuration
app.use(cors({
    origin: 'https://bill-order-frontend.vercel.app', // Allow requests from your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (like cookies, authorization headers)
}));

app.use(express.json()); // Parse JSON bodies

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    return res.send("Welcome to my project");
});

app.use('/api/products', ProductRoute);

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
    .then(() => console.log(`MongoDB connected on ${PORT}`))
    .catch(() => console.log(`MongoDB not connected`));
