const mongoose = require("mongoose");

// Define a new schema for the auction items using mongoose.Schema
// The schema defines the structure of the documents in a MongoDB collection
const auctionItemSchema = new mongoose.Schema({
  // Define a 'title' field of type String, which is required
  title: {
    type: String,
    required: true, // This field is mandatory
  },
  description: {
    type: String,
    required: true,
  },
  start_price: {
    type: Number,
    required: true,
  },
  reserve_price: {
    type: Number,
    required: true,
  },
});

const AuctionItem = mongoose.model("AuctionItem", auctionItemSchema);

module.exports = AuctionItem;
