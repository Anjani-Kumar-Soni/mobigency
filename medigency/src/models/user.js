import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    userName: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    homeAdd: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    emergency: {
        type: {
            userName: {
                type: String,
                required: true,
            },
            contact: {
                type: String,
                required: true,
            },
            relation: {
                type: String,
                required: true,
            },
        },
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    bloodPressure: {
        type: String,
        required: true,
    },
    haemoglobin: {
        type: Number,
        required: true,
    },
    familyDiabetic: {
        type: [String],
        required: true,
    },
    allergy: {
        type: [String],
        required: true,
    },
    bloodDonated: {
        type: [{
            bankName: String,
            bankAdd: String,
        }, ],
        required: true,
    },
    familyCancer: {
        type: [String],
        required: true,
    },
    operated: {
        type: [String],
        required: true,
    },
    medication: {
        type: {
            medName: [String],
            vaccName: String,
        },
    },
    problems: {
        type: {
            TB: {
                organName: String,
            },
            hasTyphoid: Boolean,
            injury: [{
                headInjury: Boolean,
            }, ],
            diabetes: {
                isDiabetic: Boolean,
            },
        },
    },

    // isVerified: {
    //     type: Boolean,
    //     default: false,
    // },
    // forgotPassWordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date,
});

const User = mongoose.models.users || new mongoose.model("users", userSchema);
export default User;