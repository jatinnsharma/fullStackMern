import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    SubTodos:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubTodo'
    }
]
},{timestamps:true})

export const Todo = mongoose.model('Todo',TodoSchema)