import dotenv from "dotenv";
dotenv.config();

import mongoose from 'mongoose';

const MongoDB = async () => {
    try {
        console.log("Connecting to MongoDB...", process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default MongoDB;
