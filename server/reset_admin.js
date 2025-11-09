import bcrypt from 'bcryptjs';
import { connectToDb } from './db.js';
import User from './models/user.model.js';

async function run() {
  try {
    await connectToDb();
    const email = 'admin@example.com';
    const plain = 'password123';
    let user = await User.findOne({ email });
    if (user) {
      user.password = await bcrypt.hash(plain, 10);
      user.role = 'admin';
      await user.save();
      console.log('Updated existing admin user:', user._id.toString());
    } else {
      const hashed = await bcrypt.hash(plain, 10);
      user = new User({ name: 'Admin User', email, password: hashed, role: 'admin' });
      await user.save();
      console.log('Created admin user:', user._id.toString());
    }
    process.exit(0);
  } catch (err) {
    console.error('Error resetting admin:', err);
    process.exit(1);
  }
}

run();
