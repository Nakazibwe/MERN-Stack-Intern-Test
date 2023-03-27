// Dependencies.
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Models
const User = require('../models/user.model');

// Helper  functions.
// Generate jwt token.
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: '1d',
});

// Create user.
exports.createUser = async (req, res) => {
  try {
    const {
      firstname, lastname, email, password, phone,
    } = req.body;

    // Check for required fields.
    if (!firstname || !lastname || !email || !password || !phone) {
      res.status(400);
      throw new Error('Please fill all required fields');
    }
    // Check for duplicate user.
    if (await User.findOne({ email })) {
      res.status(400);
      throw new Error('User already exists. Login');
    }
    // Hash password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (req.file == undefined) {
      const newUser = User.create({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword,
        avatar: null,
      });
      if (!newUser) {
        res.status(400);
        throw new Error('User creation failed');
      }
      return res.status(201).json({ message: 'User creation successful' });
    }
    const newUser = User.create({
      firstname,
      lastname,
      email,
      phone,
      password: hashedPassword,
      avatar: req.file.path,
    });
    if (!newUser) {
      res.status(400);
      throw new Error('User creation failed');
    }
    return res.status(201).json({ message: 'User creation successful' });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for required fields.
    if (!email || !password) {
      res.status(400);
      throw new Error('Please fill all fields');
    }
    // Check for user's existance.
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error('Invalid Credentials. Enter correct email');
    }

    // Compare passwords then send token to user.
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({ token: generateToken(user.id) });
    }

    // Send Error if passwords dont match.
    res.status(400);
    throw new Error('Invalid Credentials. Enter correct password');
  } catch (error) {
    return res.json({ error: error.message });
  }
};
