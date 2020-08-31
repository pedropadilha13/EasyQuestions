const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares');
const Set = require('../models/Set');

router.get('/', requireAuth, async (req, res) => {
  const sets = await Set.find({ _user: req.user._id });
  return res.send(sets);
});

router.get('/:id', requireAuth, async (req, res) => {
  const set = await Set.findById(req.params.id);
  return res.send(set);
});

router.post('/', requireAuth, async (req, res) => {
  try {
    const set = req.body;
    const newSet = await new Set(set);
    return res.status(201).send(newSet);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put('/:id', requireAuth, async (req, res) => {
  try {
    const updatedSet = await Set.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(201).send(updatedSet);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const set = await Set.findById(req.params.id);
    if (set._user === req.user.id) {
      set.remove();
      return res.status(201).send('Ok');
    } else {
      return res.status(403).send('Forbidden');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
