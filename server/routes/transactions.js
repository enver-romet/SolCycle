const express = require('express');
const router = express.Router();

router.get('/history', (req, res) => {
    // Fetch transaction history for a user
});

router.post('/new', (req, res) => {
    // Handle a new transaction (like buying an upcycled product)
});

module.exports = router;
