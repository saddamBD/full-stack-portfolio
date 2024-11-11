'use server'

import { console } from 'inspector'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('description') as string
  console.log(name, email, message)

  if (!name || !email || !message) {
    return { error: 'All fields are required' }
  }

  try {
    const data = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: ['saddam.doict@gmail.com'],
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    return { success: true, data }
  } catch (error) {
    return { 'Failed to the send email': error }
  }
}