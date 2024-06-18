const connectDB = require("./db");
const AuctionItem = require("./models/AuctionItem");

const deleteData = async () => {
  await connectDB();

  try {
    await AuctionItem.deleteMany();
    console.log("Data deleted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error deleting data", error);
    process.exit(1);
  }
};

deleteData();
