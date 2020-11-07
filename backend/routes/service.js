const express = require('express');
const router = express.Router();
const { Service } = require('../models');
const { loginValidator } = require('../route-validator');

async function taskAllocation(data) {
  // filter agents by place and category , availability 
  try {
    const { city, category, _id } = data;
    // const agents = await Service.agent.find({ city, category });
    const agents = await avilableAgents(city, category);
    console.log('&************** ', agents[0]);
    let assigned = {};
    let assignment = {};
    if (agents.length) {
      assignment = { taskID: _id, agentID: agents[0]._id }
      // assign agents here
    } else {
      //agents are not available
      assignment = { taskID: _id }
    }
    assigned = await Service.assignments.create(assignment);
    return {
      ...assigned.toJSON(),
      agentName: agents[0] ? agents[0].firstName : 'No agent available',
      agentContact: agents[0] ? agents[0].contact : 'Will assgine you agent soon.',
      message: agents.length ? `your task hasbeen assigned to ${agents[0].firstName}. He will get back to you soon.` :
        'Curreny agents are busy. So,We will assign and let you know the agent details'
    }
  } catch (error) {
    console.error('***********************', error);
  }
}

function avilableAgents(city, category) {
  return Service.agent.aggregate([
    {
      $match: {
        city: {
          $eq: city
        },
        category: {
          $eq: category
        }
      }
    },
    {
      $lookup: {
        from: 'assignments',
        localField: '_id',
        foreignField: 'agentID',
        as: 'availableAgents'
      },
    },
    {
      $unwind: {
        path: '$availableAgents',
        preserveNullAndEmptyArrays: true

      }
    },
    {
      $match: {
        'availableAgents.status': {
          $nin: ['pending', 'inprogress']
        }
      }
    }
  ])
}

router.post('/category', async function (req, res) {
  const data = await Service.service.create(req.body);
  res.json(data);
});
// router.post('/task', async function (req, res) {
//   const data = await Service.task.create(req.body);
//   if (data) {
//     res.json(data);
//   }
//   else {
//     res.status(400).json({ message: 'something went wrong' })
//   }
// });
router.post('/task', async function (req, res) {
  try {
    const data = await Service.task.create(req.body);
    if (data) {
      const taskAssinged = await taskAllocation(data);
      res.json(taskAssinged);
    }
    else {
      res.status(400).json({ message: 'something went wrong' })
    }
  } catch (error) {
    console.log('----------------------   ', error);
    res.status(500).json(error);
  }
})

router.post('/login', loginValidator, async function (req, res) {
  try {
    const data = await Service.agent.findOne({ contact: req.body.contact });
    if (data) {
      Service.agent.checkPassword(req.body.password, data.password, (err, result) => {
        if (result) {
          return res.json({ message: 'login successfully' });
        }
        else {
          res.status(400).json({ message: 'invalid password' });
        }
      });
    } else {
      // user not found
      res.status(400).json({ message: 'user not found' });
    }
  } catch (error) {
    res.status(400).json({ error, message: 'something ' });
  }
})


// router.post('/login', (req, res) => {
//   try {
//       Service.agent.findOne({ contact: req.body.contact }, (err, data) => {
//           if (err) {
//               res.status(500).json(err);
//               // serverError(res, err);
//           } else if (data) {
//               return (data,{message:'login success'})
//           } else {
//               // user not found
//               res.status(400).json(res, { message: 'user not found' });
//           }
//       });
//   } catch (error) {
//       res.status(400).json(res, error);
//   }
// })


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
router.get('/showagents', async function (req, res) {
  const data = await Service.agent.find({});
  res.json(data);
})

module.exports = router;