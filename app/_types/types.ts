import { Document, Schema } from "mongoose";

export interface dbConnection {
    isConnected: number;
}

export interface Iuser extends Document {
    fullname: string;
    username: string;
    email: string;
    password: string;
    verificationCode: number;
    state: string;
    points: number;
    progress: Array<Schema.Types.ObjectId>;
    uploadedNotes: Array<URL>;
    posts: Array<Schema.Types.ObjectId>;
}

export interface Iprompt extends Document {
    prompt: string;
    userId: Schema.Types.ObjectId;
    topic: Array<string>;
    response: JSON;
}

export interface Iquestion extends Document {
    promptId: Schema.Types.ObjectId;
    noteId: Schema.Types.ObjectId;
    generatedBy: string;
    content: JSON;
    correctAnswer: number;
    diffcultyLevel: string;
    answerId: Schema.Types.ObjectId;
    topic: Array<string>;
}

export interface Ianswer extends Document {
    questionId: Schema.Types.ObjectId;
    content: JSON;
}

export interface ILeaderBoard extends Document {
    topRankers: Array<Schema.Types.ObjectId>;
    otherUsers: Array<Schema.Types.ObjectId>;
}

export interface Iupload extends Document {
    notesUrl: string;
    userId: Schema.Types.ObjectId;
    topic: Array<string>;
    description: string;
    subject: string; 
}