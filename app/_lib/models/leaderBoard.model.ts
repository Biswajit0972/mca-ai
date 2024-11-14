import mongoose, { Schema } from "mongoose";
import { ILeaderBoard } from "@/app/_types/types";

const LeaderBoardSchema = new Schema({
    topRankers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    otherUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
}, {
    timestamps: true,
})

export const LeaderBoard = mongoose.models.Leaderboard as mongoose.Model<ILeaderBoard> || mongoose.model("Leaderboard", LeaderBoardSchema);