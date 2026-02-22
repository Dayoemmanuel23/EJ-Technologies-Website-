import { SERVICES } from '../constants';

// Frontend validation matching backend Joi schema
export function validateContactForm({ name, email, phone, service, message }: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const errors: string[] = [];

  // Name: 2-100 chars, only letters, hyphens, apostrophes, single spaces between words
  const namePattern = /^(?! )[a-zA-Z\-']+(?: [a-zA-Z\-']+)*(?<! )$/;
  if (!name || name.trim().length < 2 || name.trim().length > 100 || !namePattern.test(name.trim())) {
    errors.push('Name must be 2-100 letters, no leading/trailing spaces, only letters, hyphens, apostrophes, and single spaces.');
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email.trim()) || email.trim().length > 255) {
    errors.push('Please enter a valid email address (max 255 chars).');
  }

  // Phone: numeric, 10-15 digits
  const phoneDigits = phone.replace(/\D/g, '');
  if (!phoneDigits || phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.push('Phone number must be 10-15 digits.');
  }

  // Service: accept any service title from SERVICES
  const allowedServices = SERVICES.map(s => s.title);
  if (!service || !allowedServices.includes(service)) {
    errors.push('Please select a valid service.');
  }

  // Message: 10-1000 chars, block code fragments and suspicious patterns
  const suspiciousPattern = /[{};=]|<script|function|\b(alias|resolve|path)\b/i;
  if (!message || message.trim().length < 10 || message.trim().length > 1000 || suspiciousPattern.test(message)) {
    errors.push('Message must be 10-1000 characters and not contain code or suspicious content.');
  }

  return errors;
}
