import mongoose, { Schema, Model } from 'mongoose';

export interface IContact {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service: string;
  budget: string;
  description: string;
  createdAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Service is required'],
      enum: [
        'AI & Agentic AI Solutions',
        'Web Application Development',
        'Mobile App Development',
        'SaaS Development',
        'Business Automation',
      ],
    },
    budget: {
      type: String,
      required: [true, 'Budget is required'],
      enum: [
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+',
      ],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      minlength: [20, 'Description must be at least 20 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in development
// Explicitly set collection name to 'contacts'
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema, 'contacts');

export default Contact;
