const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      try {
        const user = await User.findById(payload.id).select('-password');
        if (!user) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
        req.user = user;
        next();
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else {
    return res.status(403).json({ error: 'You must be logged in' });
  }
};

module.exports = auth;
