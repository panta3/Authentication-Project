import express from 'express';
import mongoose from 'mongoose';  // Corrected typo from 'moongoose' to 'mongoose'
import dotenv from 'dotenv';
import userRoutes from './Routes/user.route.js'; 
import authRoutes from './Routes/auth.route.js';  

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Database is connected!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);  

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
});