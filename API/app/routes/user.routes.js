// Dependencies.
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const router = express.Router();

const userController = require('../controllers/user.controller');

// Image upload.
const maxSize = 1024 * 1024;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/avatars');
  },
  filename: (req, file, cb) => {
    const filename = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
    const extension = path.parse(file.originalname).ext;
    cb(null, `${filename}${extension}`);
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png'
      || file.mimetype == 'image/jpg'
      || file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Unsupported file format'));
    }
  },
  limits: { fileSize: maxSize },
});
const upload = multer({ storage });

// Routes
// User creation route.
router.post('/createuser', upload.single('avatar'), userController.createUser);

// Login route.
router.post('/auth/login', userController.loginUser);

module.exports = router;
