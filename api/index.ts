// Vercel Deploy Trigger 1.0
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import joi from 'joi';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// --- 1. CORE SECURITY ---
app.use(helmet());

app.use(cors({
  origin: ["https://ejtechnologies.com.ng", "https://ejtechnologiescomng.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// --- 2. BODY PARSERS ---
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// --- 3. MANUAL SANITIZER (NO MORE TYPEERRORS) ---
const sanitizeInput = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const clean = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    // Remove keys starting with $ (NoSQL Injection)
    if (!key.startsWith('$')) {
      clean[key] = typeof obj[key] === 'object' ? sanitizeInput(obj[key]) : obj[key];
    }
  }
  return clean;
};

// --- 4. RATE LIMITING ---
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many submissions. Please try again later.' }
});

// --- MODELS ---
const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: String, email: String, phone: String, service: String, message: String,
  createdAt: { type: Date, default: Date.now }
}));

const Newsletter = mongoose.model('Newsletter', new mongoose.Schema({
  email: { type: String, unique: true },
  subscribedAt: { type: Date, default: Date.now }
}));

// --- VALIDATION SCHEMA ---
const contactValidation = joi.object({
  name: joi.string().trim().min(2).max(100).pattern(/^[a-zA-Z\-']+(?: [a-zA-Z\-']+)*$/).required(),
  email: joi.string().trim().email().max(255).required(),
  phone: joi.string().trim().pattern(/^[0-9]+$/).min(10).max(15).required(),
  // Accept any service title from SERVICES (sync with frontend)
  service: joi.string().required(),
  message: joi.string().trim().min(10).max(1000).custom((value, helpers) => {
    const suspicious = /[{};=]|<script|function|\b(alias|resolve|path)\b/i;
    if (suspicious.test(value)) return helpers.error('any.invalid');
    return value;
  }).required()
});

// --- ROUTES ---

app.get('/api/health', (req, res) => res.json({ status: 'Server is running' }));

app.post('/api/contact', contactLimiter, async (req, res) => {
  // Manually sanitize the body instead of using the middleware
  const cleanBody = sanitizeInput(req.body);
  
  const { error, value } = contactValidation.validate(cleanBody, { abortEarly: false });
  
  if (error) {
    return res.status(400).json({ 
      error: 'Validation Error', 
      details: error.details.map(d => d.message) 
    });
  }

  try {
    const contact = new Contact(value);
    await contact.save();
    res.status(201).json({ success: true, message: 'Message sent!' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/subscribe', async (req, res) => {
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
});

// --- START ---

// 1. Connect to MongoDB (Vercel will reuse this connection)
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ Connection error:', err);
  }
};

// 2. Middleware to ensure DB is connected for every request
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// 3. Local Development Port (Only runs locally)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}


// 4. CRITICAL: Export for Vercel
export default app;