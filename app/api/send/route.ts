import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Saddam" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
// import { Resend } from 'resend'
// import { NextResponse } from 'next/server'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request: Request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const email = formData.get('email')
//   const message = formData.get('message')

//   if (!name || !email || !message) {
//     return NextResponse.json(
//       { error: 'Missing required fields' },
//       { status: 400 }
//     )
//   }

//   try {
//     const data = await resend.emails.send({
//       from: 'Your Portfolio <onboarding@resend.dev>',
//       to: ['your-email@example.com'],
//       subject: 'New Contact Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     })

//     return NextResponse.json(data)
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }