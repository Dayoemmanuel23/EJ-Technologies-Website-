import mongoose from 'mongoose';

const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', new mongoose.Schema({
  email: { type: String, unique: true },
  subscribedAt: { type: Date, default: Date.now }
}));

const sanitizeInput = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const clean = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (!key.startsWith('$')) {
      clean[key] = typeof obj[key] === 'object' ? sanitizeInput(obj[key]) : obj[key];
    }
  }
  return clean;
};

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI || '');
};

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://ejtechnologies.com.ng');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  await connectDB();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = sanitizeInput(req.body);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  try {
    await new Newsletter({ email }).save();
    res.status(201).json({ success: true, message: 'Subscribed!' });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Already subscribed' });
    res.status(500).json({ error: 'Server Error' });
  }
};
