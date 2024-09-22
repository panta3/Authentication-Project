import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true}, // Ensure 'username' is correctly spelled
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, 
    default: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.webp',  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;
