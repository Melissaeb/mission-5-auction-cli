const connectDB = require("./db");
const AuctionItem = require("./models/AuctionItem");
const seedData = require("./data/seedData.json");

const seedDatabase = async () => {
  await connectDB();

  try {
    await AuctionItem.deleteMany();
    await AuctionItem.insertMany(seedData);
    console.log("Data seeded successfully");
    process.exit(0);
  } catch {
    console.error("Error seeding data", error);
    process.exit(1);
  }
};

seedDatabase();
