const mongoose = require("mongoose");

// const mongoURL = "mongodb://localhost:27017/hotel";
const mongoURL =
  "mongodb+srv://rutvikpawar:rutvik1234@cluster0.8kop7pq.mongodb.net/";

mongoose.connect(mongoURL)




// Get the default connection 
// Mongoose maintains a default connection object representing the Mongodb connection.

const db = mongoose.connection;

// define Event listeners for databse Connection 
db.once("connected", () => {
  console.log("MongoDB connected");
});

db.once("disconnected", () => {
  console.log("MongoDB disconnected");
});

db.once("error", () => {
  console.log("MongoDB error");
});


// Export the Database Connection 
module.exports = db;