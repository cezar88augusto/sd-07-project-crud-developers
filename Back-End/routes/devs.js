const express = require('express');

const { addDev, getDevs } = require('../controllers/devsController');

const router = express.Router();

router.get('/select', getDevs);
router.post('/insert', addDev);

module.exports = router;