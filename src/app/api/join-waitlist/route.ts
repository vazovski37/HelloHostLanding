// file: src/app/api/join-waitlist/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: 'A valid email is required.' }, { status: 400 });
    }

    // Use Prisma to create a new entry in the Waitlist table
    const newUser = await prisma.waitlist.create({
      data: {
        email: email,
      },
    });

    return NextResponse.json({ message: 'Successfully joined the waitlist!', user: newUser }, { status: 201 });

  } catch (error: any) {
    // Handle cases where the email is already in the database (unique constraint fails)
    if (error.code === 'P2002') {
      return NextResponse.json({ message: 'This email is already on the waitlist.' }, { status: 409 });
    }

    // Generic server error
    console.error('API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}