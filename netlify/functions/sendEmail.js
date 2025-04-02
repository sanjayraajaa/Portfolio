import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ message: "Method Not Allowed" }) };
    }

    // ✅ Safely parse the request body
    let requestBody;
    try {
        requestBody = JSON.parse(event.body);
    } catch (error) {
        return { statusCode: 400, body: JSON.stringify({ success: false, message: "Invalid request body" }) };
    }

    const { name, email, message } = requestBody;
    if (!name || !email || !message) {
        return { statusCode: 400, body: JSON.stringify({ success: false, message: "Missing required fields" }) };
    }

    const dateTime = new Date().toLocaleString(); // Capture Date & Time

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER, // Your Gmail
            pass: process.env.SMTP_PASS, // Gmail App Password
        },
    });

    const mailOptions = {
        from: `"Sanjay's Portfolio Notifier" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVE_USER, // ✅ Corrected spelling
        subject: `👋 ${name} Just Reached Out Through Your Portfolio!`,
        html: `
            <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background: #ffffff; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #2c3e50; font-weight: bold; margin-bottom: 20px;">📩 New Contact Form Submission</h2>

                <div style="background: #f4f6f8; padding: 15px; border-radius: 6px;">
                    <p style="margin: 10px 0; font-size: 16px;"><strong style="color: #34495e;">👤 Name:</strong> ${name}</p>
                    <p style="margin: 10px 0; font-size: 16px;"><strong style="color: #34495e;">📧 Email:</strong> ${email}</p>
                    <p style="margin: 10px 0; font-size: 16px;"><strong style="color: #34495e;">✉️ Message:</strong></p>
                    <p style="background: #ffffff; padding: 12px; border-radius: 6px; border-left: 5px solid #007bff; font-size: 15px; color: #333;">
                        ${message}
                    </p>
                </div>

                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

                <p style="text-align: center; font-size: 14px; color: #7f8c8d;">⏳ Sent on: <strong>${dateTime}</strong></p>
            </div>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, body: JSON.stringify({ success: true, message: "Email sent successfully!" }) };
    } catch (error) {
        console.error("Error sending email:", error);
        return { statusCode: 500, body: JSON.stringify({ success: false, message: "Failed to send email." }) };
    }
}