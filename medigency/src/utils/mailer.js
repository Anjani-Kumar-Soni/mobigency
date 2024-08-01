import nodemailer from "nodemailer";

export const sendMail = async(email, emailType, description, heading) => {
    console.log(email, emailType, description, heading);
    const transporter = nodemailer.createTransport({
        host: NEXT_PUBLIC_SMTP_HOST,
        port: NEXT_PUBLIC_SMTP_PORT,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: NEXT_PUBLIC_SMTP_USER,
            pass: NEXT_PUBLIC_SMTP_PASSWORD,
        },
    });
    try {
        const info = await transporter.sendMail({
            from: NEXT_PUBLIC_SMTP_USER, // sender address
            to: email, // list of receivers
            subject: heading, // Subject line
            text: description, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // res.json(info);
    } catch (e) {
        console.log(e);
    }
};