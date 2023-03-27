// Models.
const Property = require('../models/property.model');
const User = require('../models/user.model');

// Create property.
exports.createProperty = async (req, res) => {
  try {
    const { id } = req.user;
    const {
      mls,
      price,
      address,
      description,
      tax,
      type,
      building_age,
      size,
      parking,
      basement,
      possesion,
      details,
    } = req.body;

    // Check for existance of user.
    const user = await User.findById(id);
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }

    // Check for required fields.
    if (!mls
      || !price
      || !address
      || !description
      || !tax
      || !type
      || !building_age
      || !size
      || !parking
      || !basement
      || !possesion
      || !details) {
      res.status(400);
      throw new Error('Please fill all required fields');
    }
    if (req.files.length == 0) {
      res.status(400);
      throw new Error('Please add property images');
    }
    // Create a property.
    req.files.forEach(async (file) => {
      const newProperty = await Property.create({
        mls,
        price,
        address,
        description,
        tax,
        type,
        building_age,
        size,
        parking,
        basement,
        possesion,
        details,
        images: file.path,
        creator: user.id,
      });
      if (!newProperty) {
        res.status(400);
        throw new Error('Property creation failed');
      }
      return res.status(201).json({ message: 'Property creation successful' });
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

// Get properties.
exports.getProperties = async (req, res) => {
  try {
    const { id } = req.user;

    // Check for existance of user.
    const user = await User.findById(id);
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }

    const properties = await Property.find({ creator: user.id }).select('-creator');
    if (properties.length == 0) {
      res.status(404);
      throw new Error('No properties available');
    }
    return res.status(200).json(properties);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

// Update property.
exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.user;
    const { propertyid } = req.params;
    const {
      mls,
      price,
      address,
      description,
      tax,
      type,
      building_age,
      size,
      parking,
      basement,
      possesion,
      details,
    } = req.body;

    // Check for existance of user.
    if (!(await User.findById(id))) {
      res.status(404);
      throw new Error('User not found');
    }
    const property = await Property.findById(propertyid);
    if (!property) { res.status(404); throw new Error('Property not found'); }
    property.details.push(details);

    // Update property
    if (req.files.length == 0) {
      const updatedProperty = await Property.findByIdAndUpdate(property.id, {
        mls,
        price,
        address,
        description,
        tax,
        type,
        building_age,
        size,
        parking,
        basement,
        possesion,
        details: property.details,
      });
      if (!updatedProperty) {
        res.status(400);
        throw new Error('Property update failed');
      }
      return res.status(200).json({ message: 'Property update successful' });
    }
    req.files.forEach(async (file) => {
      property.images.push(file.path);
      const updatedProperty = await Property.findByIdAndUpdate(property.id, {
        mls,
        price,
        address,
        description,
        tax,
        type,
        building_age,
        size,
        parking,
        basement,
        possesion,
        details: property.details,
        images: property.images,
      });
      if (!updatedProperty) {
        res.status(400);
        throw new Error('Property update failed');
      }
      return res.status(200).json({ message: 'Property update successful' });
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
