import mongoose from "mongoose";

const defaultUri = "mongodb://127.0.0.1:27017/Portfolio";
const mongoUri = process.env.MONGO_URI || defaultUri;

export async function connectToDb() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB at ${mongoUri}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err;
  }
}

export default mongoose;
