// require("dotenv").config({ path: "./config/config.env" });
// const express = require("express");
// const morgan = require("morgan");

// const connectDB = require("./config/db");

// const auth = require("./middlewares/auth");

// const app = express();

// // middlewares
// app.use(express.json());
// app.use(morgan("tiny"));
// app.use(require("cors")());

// // routes
// app.use("/api", require("./routes/auth"));
// app.use("/api", require("./routes/contact"));

// // server configurations.
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`server listening on port: ${PORT}`);
// });
require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// routes
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/contact'));

// server configurations.
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
});