const connectDB = require("./db");
const AuctionItem = require("../models/AuctionItem");

const verifySeededData = async () => {
  await connectDB();

  try {
    const items = await AuctionItem.find();
    console.log("Seeded Data:", items);
    process.exit(0);
  } catch (error) {
    console.error("Error verifying seeded data", error);
    process.exit(1);
  }
};

verifySeededData();
