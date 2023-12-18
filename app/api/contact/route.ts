import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
 
export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {

    const body = await req.json();

    const { nomComplet, societe,shoisir, email, phone, message, } = body;


    if (!nomComplet) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!societe) {
      return new NextResponse("Societe is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    if (!phone) {
      return new NextResponse("Phone is required", { status: 400 });
    }
    if (!message) {
      return new NextResponse("Message is required", { status: 400 });
    }
    


    const contact = await prismadb.contact.create({
      data: {
        nomComplet, 
        societe,
        email, 
        phone, 
        message,
        shoisir
      }
    });
  
    return NextResponse.json(contact);
  } catch (error) {
    console.log('[CONTACT_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
