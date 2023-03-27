const mongoose = require('mongoose');

//Database connection.
const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.DATABASE_URI);
    console.log(
      `Database successfully connected and hosted on ${dbConnect.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Database disconnection
const disconnectDB = async () => {
  try {
    return mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB, disconnectDB }
