import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName required"]
    },
    lastName: {
        type: String,
        required: [true, "lastName required"]
    },
    email: {
        type: String,
        required: [true, "email required"]
    },
    password: {
        type: String,
        required: [true, "email required"]
    }
});

const User = mongoose.model("user", UserSchema);

export default User;
