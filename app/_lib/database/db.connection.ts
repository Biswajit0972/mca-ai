import mongoose from "mongoose"
import { dbConnection } from "@/app/_types/types"

const databaseConnected: dbConnection = {
    isConnected: 0
}

const isDbConnect = async () => {
    try {
        if (databaseConnected.isConnected == 1) {
            return;
        }
        const res = await mongoose.connect(process.env.DATABASE_URI || '');
        databaseConnected.isConnected = res.connections[0].readyState;
    } catch (error) {
        console.log(error);
    }
}

export default isDbConnect;