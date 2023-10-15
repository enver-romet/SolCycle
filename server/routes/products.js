const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "All upcycled products" });
});

router.post('/new', (req, res) => {
    // Code to add a new upcycled product
});

module.exports = router;
