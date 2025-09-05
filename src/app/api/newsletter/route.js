import { NextResponse } from 'next/server';
import MailerLite from '@mailerlite/mailerlite-nodejs';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body?.email?.trim();

    if (!email) {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set');
      return NextResponse.json({ message: 'Server misconfiguration.' }, { status: 500 });
    }

    const mailerlite = new MailerLite({ api_key: apiKey });

    await mailerlite.subscribers.createOrUpdate({
      email,
    });

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
  } catch (error) {
    // Try to extract useful details from the SDK/HTTP error
    const status = error?.response?.status ?? error?.status ?? 500;
    const rawMessage = error?.response?.data?.error?.message
      ?? error?.response?.data?.message
      ?? error?.message
      ?? 'Subscription failed.';

    const messageText = typeof rawMessage === 'string' ? rawMessage : 'Subscription failed.';
    const lower = messageText.toLowerCase();

    // Treat duplicate/existing subscriber as a successful subscription
    if (status === 409 || lower.includes('already') || lower.includes('exist')) {
      return NextResponse.json({ message: 'Already subscribed.' }, { status: 200 });
    }

    console.error('Error adding subscriber:', error);
    return NextResponse.json({ message: messageText }, { status: status >= 400 && status < 600 ? status : 500 });
  }
}