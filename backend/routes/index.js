const express = require('express');
const router = express.Router();
const serviceRoute = require('./service');

router.use('/service', serviceRoute);

module.exports = router;    
