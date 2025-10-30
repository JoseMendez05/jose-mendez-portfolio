//import express from "express";
//var express = require("express");
//var app = express();
import app from "./server/express.js";
import router from "./server/assets-router.js";
import { connectToDb } from "./server/db.js";
// import models so they're registered with mongoose
import "./server/models/contact.model.js";
import "./server/models/project.model.js";
import "./server/models/education.model.js";
import "./server/models/user.model.js";
import contactsRouter from "./server/routes/contacts.routes.js";
import projectsRouter from "./server/routes/projects.routes.js";
import qualificationsRouter from "./server/routes/qualifications.routes.js";
import usersRouter from "./server/routes/users.routes.js";
import authRouter from "./server/routes/auth.routes.js";

app.use("/src", router);
// API routes
app.use("/api/contacts", contactsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/qualifications", qualificationsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.get("/", function (req, res) {
  res.send("Welcome to Portfolio Application - Backend is running");
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectToDb();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
}

start();

export default app;
