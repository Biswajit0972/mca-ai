import mongoose, { Model, Schema } from "mongoose";
import { Iuser } from "@/app/_types/types";

const UserModel: Schema<Iuser> = new Schema<Iuser>({
    fullname: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required!"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required!"],
        trim: true,
    },
    state: {
        type: String,
        required: [true, "state is required!"],
        trim: true,
    },
    verificationCode: {
        type: Number,
        required: [true, "verification is required"],
        min: [6, "minimum 6 digit required!"],
    },
    points: {
        type: Number,
    },
    progress: [
        {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    ],
    uploadedNotes: [
        {
            type: URL,
        }
    ],
}, {
    timestamps: true
});

export const User:Model<Iuser> = mongoose.models.user as mongoose.Model<Iuser> || mongoose.model("user", UserModel);