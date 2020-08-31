const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const userRoute = require('./user');
const setRoute = require('./set');

router.use('/auth', authRouter);
router.use('/user', userRoute);
router.use('/set', setRoute);

module.exports = router;
