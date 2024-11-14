import mongoose, { Schema } from "mongoose";
import { Ianswer } from "@/app/_types/types";

const AnswerSchema: Schema<Ianswer> = new Schema<Ianswer>({
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Question"
    }
    ,
    content: {
        type: JSON,
        required: true,
    }
}, { timestamps: true });

export const Answer = mongoose.models.Answer as mongoose.Model<Ianswer> || mongoose.model("Answer", AnswerSchema);