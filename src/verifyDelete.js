const connectDB = require("./db");
const AuctionItem = require("../models/AuctionItem");

const verifyDeletedData = async () => {
  await connectDB();

  try {
    const items = await AuctionItem.find();
    if (items.length === 0) {
      console.log("Data successfully deleted");
    } else {
      console.log("Data still exists:", items);
    }
    process.exit(0);
  } catch (error) {
    console.error("Error verifying deleted data", error);
    process.exit(1);
  }
};

verifyDeletedData();
