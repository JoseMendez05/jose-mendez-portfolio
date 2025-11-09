import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // role: 'user' or 'admin' - default to 'user'
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);

const User = mongoose.model("User", userSchema);
export default User;
