module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: 'You must log in' });
  }

  return next();
};
