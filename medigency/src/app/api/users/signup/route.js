import connect from "../../../../middlewares/mongoose";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async(req) => {
    try {
        await connect();
        const reqBody = await req.json();
        const {
            userName,
            email,
            password,
            contact,
            homeAdd,
            dob,
            emergency,
            bloodGroup,
            bloodPressure,
            haemoglobin,
            familyDiabetic,
            allergy,
            bloodDonated,
            familyCancer,
            operated,
            medication,
            problems,
        } = reqBody;
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password, salt);

        const currUser = new User({
            userName,
            email,
            password: hashedPass,
            contact,
            homeAdd,
            dob,
            emergency,
            bloodGroup,
            bloodPressure,
            haemoglobin,
            familyDiabetic,
            allergy,
            bloodDonated,
            familyCancer,
            operated,
            medication,
            problems,
        });
        await currUser.save();
        return NextResponse.json({ message: "Signup successful" }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: e.message }, { status: 500 });
    }
};