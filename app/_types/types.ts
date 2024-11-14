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