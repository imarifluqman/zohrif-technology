import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();

    // Validate required fields
    const { fullName, email, service, budget, description } = body;

    if (!fullName || !email || !service || !budget || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new contact document
    const contact = await Contact.create({
      fullName: body.fullName,
      companyName: body.companyName,
      email: body.email,
      phone: body.phone,
      service: body.service,
      budget: body.budget,
      description: body.description,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          id: contact._id,
          fullName: contact.fullName,
          email: contact.email,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form submission error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    );
  }
}
