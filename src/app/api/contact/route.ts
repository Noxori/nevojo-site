import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  firstName: z.string().min(1),
  lastName:  z.string().min(1),
  email:     z.string().email(),
  division:  z.string().optional(),
  subject:   z.string().min(1),
  message:   z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body   = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 })
    }

    const { firstName, lastName, email, division, subject, message } = parsed.data

    const { data, error } = await resend.emails.send({
      from:    'Nevojo Contact <hello@nevojo.com>',
      to:      ['hello@nevojo.com'],
      reply_to: email,
      subject: `[Nevojo] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0A0F1E;color:#E8EAF0;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <span style="color:#00F0B5;font-weight:700;font-size:18px;letter-spacing:2px;">NEVOJO</span>
            <span style="color:#8892A4;font-size:12px;margin-left:8px;">Technologies</span>
          </div>
          <h2 style="color:#E8EAF0;margin-bottom:4px;">New Contact Form Submission</h2>
          <p style="color:#8892A4;font-size:13px;margin-bottom:24px;">Received via nevojo.com/contact</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#8892A4;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:120px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#E8EAF0;font-size:14px;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#8892A4;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#00F0B5;font-size:14px;">${email}</td></tr>
            ${division ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#8892A4;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Division</td>
                <td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#E8EAF0;font-size:14px;">${division}</td></tr>` : ''}
            <tr><td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#8892A4;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Subject</td>
                <td style="padding:10px 0;border-bottom:1px solid #1A2235;color:#E8EAF0;font-size:14px;">${subject}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#050810;border-radius:8px;border:1px solid #1A2235;">
            <p style="color:#8892A4;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Message</p>
            <p style="color:#E8EAF0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#1A2235;font-size:11px;margin-top:24px;text-align:center;">
            Nevojo Technologies LLC · Tech for a Connected World
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
