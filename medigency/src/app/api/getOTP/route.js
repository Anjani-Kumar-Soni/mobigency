import { NextResponse } from "next/server";
import { createClient } from "redis";
const otpGenerator = require("otp-generator");
import { sendMail } from "../../../utils/mailer";

export const POST = async(req) => {
    // using redis here to temporarily store and retrieve otp of the user in O(1) time because of hashing of "redis"
    const client = createClient({
        password: "zDxePzh0LGkEaMJvIB2s5lYuIft5MkZS",
        socket: {
            host: "redis-12654.c16.us-east-1-2.ec2.redns.redis-cloud.com",
            port: 12654,
        },
    });
    client.on("error", (err) => {
        console.log(err);
        return NextResponse.json({
            message: "Some error occured",
            status: 500,
        });
    });
    await client.connect();

    const otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
    });
    const { email } = await req.json();
    await client.set("otp:" + email, otp, { EX: 600 });
    await sendMail(email, "VERIFY", otp, "Verify your email");
    return NextResponse.json({ message: "OTP sent successfully", status: 200 });
};