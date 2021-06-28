const express = require('express');

const { addDev, getDevs, deleteDev, getDevByName, updateByName } = require('../controllers/devsController');

const router = express.Router();

router.get('/select', getDevs);
router.post('/insert', addDev);
router.delete('/delete', deleteDev);
router.put('/getByName', getDevByName)
router.put('/update', updateByName);

module.exports = router;