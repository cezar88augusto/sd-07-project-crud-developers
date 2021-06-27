const express = require('express');

const { addDev, getDevs, deleteDev } = require('../controllers/devsController');

const router = express.Router();

router.get('/select', getDevs);
router.post('/insert', addDev);
router.delete('/delete', deleteDev);

module.exports = router;