// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Define routes
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(401).json({ message: 'User not found' });
      }

      // const isPasswordValid = await bcrypt.compare(password, user.password);
      const isPasswordValid = await (password, user.password);

      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password' });
      }

      return res.status(200).json({ message: 'User found' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});


// Add more routes as needed...

module.exports = router;
