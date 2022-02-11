import type { NextApiRequest, NextApiResponse } from "next";
import type { ContactFields } from "../../components/contact/contactForm/ContactForm";
import nodemailer from "nodemailer";

type Response = {
    message: string;
};

const contactHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Response>
) => {
    try {
        // enforce types from contact form component
        const { name, email, message } = req.body as ContactFields;

        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
        });

        /*
         * streaming responses not supported by Vercel, so
         * standard nodemailer functionality is blocked.
         * using promises as a workaround
         */

        // validate configuration
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Nodemailer properly configured");
                    resolve(success);
                }
            });
        });

        await new Promise((resolve, reject) => {
            transporter.sendMail(
                {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_INBOX,
                    subject: `${name} would like to get in touch!`,
                    text: `${message} | You can reach me at: ${email}`,
                    html: `<p>${message}</p><p>You can reach me at: ${email}</p>`,
                    priority: "high",
                    disableFileAccess: true,
                },
                (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                }
            );
        });

        res.status(200).json({ message: "ok" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "failed to send message" });
    }
};

export default contactHandler;
