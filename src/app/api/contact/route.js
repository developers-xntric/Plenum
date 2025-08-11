import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: process.env.SMTPEMAIL,
        pass: process.env.SMTPPASSWORD,
    },
});

export async function POST(req) {
    try {
        const { name, email, number, message } = await req.json();

        // 1) Send email  
        await transport.sendMail({
            from: process.env.SMTPEMAIL,
            to: `info@plenum-tech.com, ${email}, farrukh.mushtaq@xntric.me, umarofficial0121@gmail.com`,
            subject: `CONTACT: Query from ${name}`,
            text: "You have a new contact inquiry.",
            html: `
        <div style="background:#f3f4f6; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color:#ff6035; text-align:center;">New Inquiry Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#ff6035;">${email}</a></p>
            <p><strong>Number:</strong> ${number}</p>
            <p><strong>Message:</strong> ${message}</p>
            <div style="text-align:center; margin-top:20px;">
              <a href="mailto:${email}" style="background:#ff6035; color:white; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">Reply Now</a>
            </div>
          </div>
        </div>
      `,
        });

        // 2) Log to Google Sheet  
        try {
            await fetch("https://script.google.com/macros/s/AKfycbwjepj9tjLLQbqSmif4dLke41gYoRxH7gRUOHcnTSAV3soDFyRL2o5PPlQbO66HRW6rmQ/exec", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    name,
                    email,
                    number,
                    message
                })
            });

        } catch (sheetErr) {
            console.error("Sheet logging failed:", sheetErr);
        }

        return NextResponse.json({ message: "Sent and logged where possible." }, { status: 200 });
    } catch (err) {
        console.error("Request error:", err);
        return NextResponse.json({ error: "Failed to submit your message." }, { status: 500 });
    }
}
