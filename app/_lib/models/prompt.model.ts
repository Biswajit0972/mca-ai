import mongoose, {Model, Schema} from "mongoose";
import { Iprompt } from "@/app/_types/types";

const PromptSchema:Schema<Iprompt> = new Schema<Iprompt>({
    prompt: {
        type: String,
        required: [true, "please add something in prompts for generate something"],
    },
    userId: {
        type: Schema.Types.ObjectId,
        res: "User"
    },
    topic: [
        {
            type: String,
            required: true
        }
    ],
    response: {
        type: JSON,
        required: true
    }
},{timestamps: true});

export const Prompt:Model<Iprompt> = mongoose.models.Prompt as mongoose.Model<Iprompt> || mongoose.model("Prompt", PromptSchema);