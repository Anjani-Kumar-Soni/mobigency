import { NextResponse } from "next/server";
import { createClient } from "redis";

export const POST = async(req) => {
    const client = createClient({
        password: NEXT_PUBLIC_REDIS_PASSWORD,
        socket: {
            host: NEXT_PUBLIC_REDIS_HOST,
            port: NEXT_PUBLIC_REDIS_PORT,
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