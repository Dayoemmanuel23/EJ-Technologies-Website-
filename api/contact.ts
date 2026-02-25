import mongoose from 'mongoose';
import joi from 'joi';

const contactValidation = joi.object({
  name: joi.string().trim().min(2).max(100).pattern(/^[a-zA-Z\-']+(?: [a-zA-Z\-']+)*/).required(),
  email: joi.string().trim().email().max(255).required(),
  phone: joi.string().trim().pattern(/^[0-9]+$/).min(10).max(15).required(),
  service: joi.string().required(),
  message: joi.string().trim().min(10).max(1000).custom((value, helpers) => {
    const suspicious = /[{};=]|<script|function|\b(alias|resolve|path)\b/i;
    if (suspicious.test(value)) return helpers.error('any.invalid');
    return value;
  }).required()
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', new mongoose.Schema({
  name: String, email: String, phone: String, service: String, message: String,
  createdAt: { type: Date, default: Date.now }
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
  res.setHeader('Access-Control-Allow-Origin', 'https://api.ejtechnologies.com.ng');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  await connectDB();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const cleanBody = sanitizeInput(req.body);
  const { error, value } = contactValidation.validate(cleanBody, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      error: 'Validation Error',
      details: error.details.map((d) => d.message)
    });
  }
  try {
    const contact = new Contact(value);
    await contact.save();
    res.status(201).json({ success: true, message: 'Message sent!' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
