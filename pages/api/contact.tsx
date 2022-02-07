import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const contactHandler = async (req: NextApiRequest, resp: NextApiResponse) => {
    try {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
        });

        await transporter.sendMail(
            {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_INBOX,
                subject: "Portfolio Contact Submission",
                text: `${req.body.message} | Sent from: ${req.body.email}`,
                html: `<p>${req.body.message}</p><p>Sent from: ${req.body.email}</p>`,
                priority: "high",
                disableFileAccess: true,
            },
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    console.log(result);
                }
            }
        );

        resp.status(200).json({ message: "ok" });
    } catch (err) {
        console.log(err);
        resp.status(500).json({ message: "failed to send message" });
    }
};

export default contactHandler;
