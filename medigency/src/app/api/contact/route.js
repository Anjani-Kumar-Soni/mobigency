import { NextResponse } from "next/server";
import { sendMail } from "../../../utils/mailer";

export const POST = async(req) => {
    const { heading, description, email } = await req.json();
    await sendMail(email, "query", description, heading);
    return NextResponse.json({ message: "Hello" });
};