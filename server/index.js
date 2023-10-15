const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recyclingRoutes = require('./routes/recycling');
const productRoutes = require('./routes/products');
const initiativeRoutes = require('./routes/initiatives');
const userRoutes = require('./routes/user');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/solCycle', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("Connected to MongoDB");
});

// Routes
app.use('/api/recycling', recyclingRoutes);
app.use('/api/products', productRoutes);
app.use('/api/initiatives', initiativeRoutes);
app.use('/api/user', userRoutes);

// Server startup
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
