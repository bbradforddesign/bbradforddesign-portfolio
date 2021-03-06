import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// fields contained in request body
type ContactFields = {
    name: string;
    email: string;
    message: string;
};

interface Response extends NextApiResponse {
    message?: string;
    error?: string;
}

const contactHandler = async (req: NextApiRequest, res: Response) => {
    try {
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
        }).catch((err) => {
            throw err;
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
        }).catch((err) => {
            throw err;
        });

        res.status(200).json({ message: "message sent" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: "server error" });
    }
};

export default contactHandler;
