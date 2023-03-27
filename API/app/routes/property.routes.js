// Dependencies.
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const router = express.Router();

const verifyToken = require('../middlewares/auth.middleware');
const propertyController = require('../controllers/property.controller');
// Image upload.
const maxSize = 1024 * 1024;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/property');
  },
  filename: (req, file, cb) => {
    const filename =
      path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
    const extension = path.parse(file.originalname).ext;
    cb(null, `${filename}${extension}`);
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
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
// Create property.
router.post(
  '/createproperty',
  verifyToken,
  upload.array('images', 5),
  propertyController.createProperty,
);

// Get properties.
router.get('/', verifyToken, propertyController.getProperties);

// Update property.
router.patch(
  '/:propertyid',
  verifyToken,
  upload.array('images', 5),
  propertyController.updateProperty,
);

module.exports = router;
