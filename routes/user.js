const express = require('express');
const { requireAuth } = require('../middlewares');

const router = express.Router();

router.get('/', requireAuth, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
