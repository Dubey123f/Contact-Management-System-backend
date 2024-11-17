// const mongoose = require('mongoose');
// const connectDB = async()=>{
//     return mongoose.connect("mongodb//localhost:27017/").then (()=>
//         console.log("Connected to MongoDB")
//     )
//     .catch((err)=>
//         console.error("Error connecting to MongoDB", err)
//     );

// };
// module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;