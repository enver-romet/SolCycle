const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "All sustainability initiatives" });
});

router.post('/new', (req, res) => {
    // Code to start a new initiative
});

module.exports = router;
