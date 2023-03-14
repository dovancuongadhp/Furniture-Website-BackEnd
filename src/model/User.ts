import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: String,  
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)
export default User