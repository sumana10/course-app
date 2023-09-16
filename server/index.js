const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// Connection URL for the MongoDB database
const dbURL = 'mongodb://127.0.0.1:27017/courses';

// Options for connecting to the database
const connectOptions = {
  useNewUrlParser: true,          // Use the new URL parser
  useUnifiedTopology: true,      // Use the new unified topology engine
  dbName: 'courses'              // Name of the database
};

// Establish a connection to the MongoDB database
mongoose.connect(dbURL, connectOptions)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });
app.listen(3000, () => console.log('Server running on port 3000'));
