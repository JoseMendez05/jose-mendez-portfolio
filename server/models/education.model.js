import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    completion: { type: Date },
    description: { type: String },
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", educationSchema);
export default Education;
