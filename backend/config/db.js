const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://allarimukeshkumar_db_user:KO6zNr1YY2ulkxLz@ac-viz3b3f-shard-00-00.c320pau.mongodb.net:27017,ac-viz3b3f-shard-00-01.c320pau.mongodb.net:27017,ac-viz3b3f-shard-00-02.c320pau.mongodb.net:27017/?ssl=true&replicaSet=atlas-waet8s-shard-0&authSource=admin&appName=Cluster0");

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = connectDB;