const connectDB = require("./db");
const AuctionItem = require("../models/AuctionItem");
const mongoose = require("mongoose");

const verifyDeletedData = async () => {
  await connectDB();

  try {
    const items = await AuctionItem.find();
    if (items.length === 0) {
      console.log("Data successfully deleted");
    } else {
      console.log("Data still exists:", items);
    }
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
    // Exiting with status code 0 indicates that the process finished successfully.
    process.exit(0);
  } catch (error) {
    console.error("Error verifying deleted data", error);
    // If the connection to MongoDB fails, the script logs the error and immediately exits with a status code of 1 indicating an error.
    process.exit(1);
  }
};

verifyDeletedData();
