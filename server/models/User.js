import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: [true, "First Name is required"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    stocks:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Stocks",
        },
    ]
})

const User = mongoose.model("User", userSchema);
export default User;