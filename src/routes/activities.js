const express = require('express');
const router = express.Router();
const ActivitiesRepo = require('../repos/activities-repo');
const auth = require('../middleware/auth');

router.get('/api/activities?', auth, async (req, res) => {
  const { userid, date, limit } = req.query;

  const activities = await ActivitiesRepo.findAllActivites(
    userid,
    date,
    Number(limit)
  );

  res.send(activities);
});

router.post('/api/activities', auth, async (req, res) => {
  const { title, date } = req.body;
  if (!title.trim() || !date) {
    res.status(400).json({ msg: 'Please fill in required Fields' });
  }
  const insertRows = await ActivitiesRepo.CreateActivities(req.body);
  res.status(201).send(insertRows);
});
router.put('/api/activities', auth, async (req, res) => {
  const { title, date } = req.body;
  if (!title.trim() || !date) {
    res.status(400).json({ msg: 'Please fill in required Fields' });
  }
  const updatedRows = await ActivitiesRepo.CreateActivities(req.body);
  res.status(200).send(updatedRows);
});

module.exports = router;
