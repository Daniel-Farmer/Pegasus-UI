import mongoose from "mongoose";
import User from "../src/models/User";
import Project from "../src/models/Project";
import dbConnect from "../src/lib/db";

async function seed() {
  await dbConnect();

  console.log("Clearing existing data...");
  await User.deleteMany({});
  await Project.deleteMany({});

  console.log("Seeding new data...");

  const defaultUser = await User.create({
    name: "Default User",
    email: "user@example.com",
  });

  const exampleProject = await Project.create({
    name: "Example Project",
    description: "This is a sample project seeded from the database.",
    lastUpdated: new Date(),
  });

  console.log("Database seeded successfully!");
  mongoose.connection.close();
}

seed().catch((err) => {
  console.error("Failed to seed database:", err);
  mongoose.connection.close();
});
