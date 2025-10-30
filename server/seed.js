import "dotenv/config";
import { connectToDb } from "./db.js";
import Contact from "./models/contact.model.js";
import Project from "./models/project.model.js";
import Education from "./models/education.model.js";
import User from "./models/user.model.js";

async function seed() {
  try {
    await connectToDb();

    // Contacts
    const contactCount = await Contact.countDocuments();
    if (contactCount === 0) {
      const c = await Contact.create({
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
      });
      console.log("Inserted contact:", c._id.toString());
    } else {
      console.log(`Contacts collection already has ${contactCount} documents.`);
    }

    // Projects
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      const p = await Project.create({
        title: "Demo Project",
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        completion: new Date(),
        description: "A demo project created by seed script.",
      });
      console.log("Inserted project:", p._id.toString());
    } else {
      console.log(`Projects collection already has ${projectCount} documents.`);
    }

    // Educations
    const educationCount = await Education.countDocuments();
    if (educationCount === 0) {
      const e = await Education.create({
        title: "BSc Computer Science",
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        completion: new Date(),
        description: "Demo education entry.",
      });
      console.log("Inserted education:", e._id.toString());
    } else {
      console.log(`Educations collection already has ${educationCount} documents.`);
    }

    // Users
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const u = await User.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "password123",
      });
      console.log("Inserted user:", u._id.toString());
    } else {
      console.log(`Users collection already has ${userCount} documents.`);
    }

    console.log("Seeding completed.");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();
