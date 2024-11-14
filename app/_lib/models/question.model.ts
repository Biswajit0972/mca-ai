import mongoose, {Schema} from "mongoose";
import { Iquestion } from "@/app/_types/types";

const QuestionSchema:Schema<Iquestion> = new Schema<Iquestion>({
    promptId: {
        type: Schema.Types.ObjectId,
        ref: "Prompt"
    },
    noteId: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    },
    generatedBy: {
        type: String,
    },
    content: {
        type: JSON,
        required: [true, "content is required"]

    },
    correctAnswer: {
        type: Number,
        required: true
    },
    diffcultyLevel: {
        type: String,
        required: true
    },
    answerId: {
        type: Schema.Types.ObjectId,
        ref: "Answer"
    }
    ,
    topic: [
        {
            type: String,
            required: true
        }
    ]
}, {
    timestamps: true
})

export const Question = mongoose.models.Question as mongoose.Model<Iquestion> || mongoose.model("Question", QuestionSchema);