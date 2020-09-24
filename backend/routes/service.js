const express = require('express');
const router = express.Router();
const { Service } = require('../models');

router.post('/category', async function (req, res) {
  const data = await Service.service.create(req.body);
  res.json(data);
});
router.post('/task', async function (req, res) {
  const data = await Service.task.create(req.body);
  res.json(data);
});


router.post('/signup', (req, res) => {
  Service.agent.findOne({ contact: req.body.contact }, function (err, data) {
    if (err) {
      res.status(500).json(err);
    } else if (data) {
      res.status(400).json({ message: 'this account is already exist' });
    } else {
      Service.agent.create(req.body).then((data) => {
        res.json(data);
      });
    }
  })
})

// router.post('/login')
router.post('/city', async function (req, res) {
  const data = await Service.city.create(req.body);
  res.json(data);
})

router.get('/showService', async function (req, res) {
  try {
    const data = await Service.service.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json(err);
  }
})

router.get('/showCity', async function (req, res) {
  try {
    const data = await Service.city.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json(err);
  }
})

module.exports = router;