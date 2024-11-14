import { Iupload } from "@/app/_types/types";
import mongoose, { Schema } from "mongoose";

const uploadNotesSchema = new Schema({
    notesUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    topic: [
        {
            type: String,
            required: [true, "topic is required"]
        }
    ],
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    subject: {
        type: String,
        required: [true, "subject is required"]
    }
}, {
    timestamps: true
});

export const Upload = mongoose.models.Upload as mongoose.Model<Iupload> || mongoose.model("Upload", uploadNotesSchema);