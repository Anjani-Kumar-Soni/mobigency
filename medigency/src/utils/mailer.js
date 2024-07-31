import nodemailer from "nodemailer";

export const sendMail = async(email, emailType, description, heading) => {
    console.log(email, emailType, description, heading);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "aniducation@gmail.com",
            pass: "eflp widz paeu wzxp",
        },
    });
    try {
        const info = await transporter.sendMail({
            from: "aniducation@gmail.com", // sender address
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