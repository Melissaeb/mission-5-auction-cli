const mongoose = require("mongoose");
const connectDB = require("./db");
const AuctionItem = require("../models/AuctionItem");

// Function to delete all documents from the AuctionItem collection
const deleteData = async () => {
  await connectDB();

  try {
    // Delete all documents in the AuctionItem collection
    await AuctionItem.deleteMany();
    console.log("Data deleted successfully");
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
    // Exiting with status code 0 indicates that the process finished successfully.
    process.exit(0);
  } catch (error) {
    console.error("Error deleting data", error);
    // If the connection to MongoDB fails, the script logs the error and immediately exits with a status code of 1 indicating an error.
    process.exit(1);
  }
};

deleteData();
