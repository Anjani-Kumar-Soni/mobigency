import { NextResponse } from "next/server";
import { createClient } from "redis";

export const POST = async(req) => {
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
    const { otp, email } = await req.json();
    const OTP = await client.get("otp:" + email);
    if (!OTP)
        return NextResponse.json({ message: "Request Timeout", status: 408 });
    if (otp === OTP)
        return NextResponse.json({ message: "User authorized", status: 200 });
    return NextResponse.json({ message: "User unauthorized", status: 401 });
};