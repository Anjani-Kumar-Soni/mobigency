import { NextResponse } from "next/server";
import User from "../../../../models/user";
import bcryptjs from "bcryptjs";
import connect from "../../../../middlewares/mongoose";

export const POST = async(req) => {
    await connect();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user)
        return NextResponse.json({ message: "User does not exist", status: 400 });

    const compare = await bcryptjs.compare(password, user.password);
    // console.log(compare);
    if (!compare)
        return NextResponse.json({ message: "Invalid credentials", status: 400 });

    return NextResponse.json({ message: "Log in successful", status: 200 });
};