import connect from "../../../../middlewares/mongoose";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    try {
        await connect();
        const email = await req.json();
        const userData = await User.findOne({ email });
        if (!userData) return NextResponse.json({ message: "User not found!", status: 404 })
        return NextResponse.json({ data: userData, status: 200 });
    } catch (e) {
        return NextResponse.json({ message: e.message, status: 400 });
    }
};