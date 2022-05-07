import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const dbCollection = process.env.MONGODB_COLLECTION

const TaskSchema = new mongoose.Schema({
    name: String,
    task: String,
    done: false
}, {
    timestamps:true
})

const TaskModel = new mongoose.model(dbCollection, TaskSchema)

export default TaskModel
