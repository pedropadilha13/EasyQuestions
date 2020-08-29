const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const userRoute = require('./user');

router.use('/auth', authRouter);
router.use('/user', userRoute);

module.exports = router;
