const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserRepo = require('../repos/user-repo');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
require('dotenv').config({ path: '../.env' });
const config = require('config');
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserRepo.findByEmailOrUserName(email);
  if (!user) {
    return res.status(400).json({ msg: 'User Not Found' });
  }

  const isMatch = await bcrypt.compare(password, user.Password);
  if (!isMatch) {
    return res.status(400).json({ msg: 'Invalid Credentials' });
  }
  const payload = {
    user: {
      id: user.id
    }
  };
  jwt.sign(
    payload,
    process.env.jwtSecret ? process.env.jwtSecret : config.get('jwtSecret'),
    {
      expiresIn: 360000
    },
    (err, token) => {
      if (err) throw err;
      res.json({ token, msg: 'Sign In Successfully' });
    }
  );
});

router.get('/api/auth', auth, (req, res) => {
  res.json({ msg: 'Valid Credentials' });
});

module.exports = router;
